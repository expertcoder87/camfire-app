class Shared::InventoryItemsController < ApplicationController
    respond_to :json


    def create
      @inventory_item = InventoryItem.create(inventory_item_params)
      $client.publish "/notifications", {inventory_item: InventoryItemSerializer.new(@inventory_item).as_json}.to_json
      @inventory = @inventory_item.inventory
      $client.publish "/notifications", {inventory: InventorySerializer.new(@inventory).as_json}.to_json
      render json: @inventory_item
    end

    def index
      if params[:ids]
        begin
          render json: InventoryItem.find(params[:ids])
        rescue => e
          render json: []
        end
      elsif params[:inventory_id]
        render json: InventoryItem.where(inventory_id: params[:inventory_id])
      else
        @inventory_items = InventoryItem.all
        render json: @inventory_items
      end
    end

    def destroy
      if params[:id] && (@inventory_item = InventoryItem.find(params[:id]))
        render json: InventoryItem.destroy(params[:id])
      else
        render json: {'msg':'failed'}
      end
    end

    def update
      if params[:id]
        @inventory_item = InventoryItem.where(id:params[:id])
        if @inventory_item.length
          @inventory_item.update(inventory_item_params)
        end
      elsif params[:thing_id] && params[:inventory_id]
        @inventory_item = InventoryItem.where(thing_id: params[:thing_id], inventory_id: params[:inventory_id])
        @inventory_item.update(inventory_item_params)
      end
      $client.publish "/notifications", {inventory_item: InventoryItemSerializer.new(@inventory_item.first).as_json}.to_json
      render json: @inventory_item
    end

    def give_item
      @quantity = params[:quantity].to_i
      @inventory = Character.find(params[:character_id]).inventories.find_by_name('Equipped')
      @inventory_item=false

      if @inventory and @inventory.inventory_items
        @inventory_item = @inventory.inventory_items.where(thing_id:params[:thing_id]).first
      end
      @current_inventory_item = InventoryItem.find(params[:item_id])
      if @inventory_item
        @new_quantity = @inventory_item.quantity + @quantity
        @inventory_item.update(quantity:@new_quantity)
        @inventory_item.save
      elsif !@inventory_item
        @new_item  = InventoryItem.new(quantity:@quantity, thing_id:params[:thing_id], inventory_id: @inventory.id)
        @new_item.save
      end
      if @current_inventory_item
        if @current_inventory_item.quantity==@quantity
          @current_inventory_item.destroy
        else
          @current_quantity = @current_inventory_item.quantity - @quantity
          @current_inventory_item.update(quantity: @current_quantity)
          @current_inventory_item.save
        end
      end
      $client.publish "/notifications", {inventory_item: InventoryItemSerializer.new(@current_inventory_item).as_json}.to_json
      render json: {:msg => 1, :quantity => @current_quantity}, status: :ok
    end

    def move_item
      @quantity = params[:quantity].to_i
      @current_item = InventoryItem.find(params[:item_id])
      @inventory_item =   Inventory.find(params[:inventory_id]).inventory_items.where(thing_id: params[:thing_id]).first

      if @inventory_item
        @new_quantity = @inventory_item.quantity + @quantity
        @inventory_item.update(quantity:@new_quantity)
        @inventory_item.save
        if @current_item.quantity == @quantity
          @current_item.destroy
        else
          @current_item.update(quantity: @current_item.quantity - @quantity)
          @current_item.save
        end
      else
        InventoryItem.create(quantity:@quantity, inventory_id: params[:inventory_id], thing_id: params[:thing_id])
        if @quantity==@current_item.quantity
          @current_item.destroy
        else
          @current_item.update(quantity: @current_item.quantity - @quantity)
          @current_item.save
        end
      end
      $client.publish "/notifications", {inventory_item: InventoryItemSerializer.new(@current_item).as_json}.to_json
      render json: {:msg=> 1, :quantity => @current_item.quantity}, status: :ok
    end

    def show
      begin
        @inventory_item = InventoryItem.find(params[:id])
        render json: @inventory_item
      rescue => e
        render json: []
      end
    end

    private
      def give_item_params
      end

      def inventory_item_params
        params.require(:inventory_item).permit(:quantity, :thing_id, :inventory_id)
      end
end
