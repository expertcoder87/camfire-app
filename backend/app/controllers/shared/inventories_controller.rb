class Shared::InventoriesController < ApplicationController
    respond_to :json

    def index
      if params[:ids]
        begin
          render json: Inventory.find(params[:ids])
        rescue => e
          render json: []
        end
      else
        @inventories = Inventory.all
        render json: @inventories
      end
    end

    def create
        @inventory = Inventory.create(inventory_params)
        if @inventory.id
          $client.publish "/notifications", {inventory: InventorySerializer.new(@inventory).as_json}.to_json
          render json: @inventory
        else
          render json: {
            error: @inventory.errors.full_messages
            }, status: 422

        end
    end

    def get
       render json: Inventory.find(params[:inventory])
    end

    def show
      begin
        @inventory = Inventory.find(params[:id])
        render json: @inventory
      rescue => e
        render json: []
      end
    end

    def destroy
      @inventory= Inventory.find(params[:id])
      if @inventory
        unless @inventory.name == "Equipped"
          InventoryItem.where(inventory_id: params[:id]).each do |item|
            item.destroy
          end
          $client.publish "/notifications", {inventory: InventorySerializer.new(@inventory).as_json}.to_json
          render json: @inventory.destroy
        else
          render json: []
        end
      end
    end

    private

      def inventory_params
        params.require(:inventory).permit(:name, :character_id, :capacity)
      end

end
