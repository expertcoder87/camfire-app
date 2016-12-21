class Shared::ThingsController < ApplicationController

    def index
      if params[:ids]
        begin
          render json: Thing.find(params[:ids])
        rescue => e
          render json: []
        end
      elsif params[:game_id] and params[:inventory_id]
        @inventory_item_things = InventoryItem.where(inventory_id: params[:inventory_id]).pluck(:thing_id)
        if @inventory_item_things.empty?
          render json: Thing.where(game_id: params[:game_id])
        else
        render json: Thing.where(game_id:params[:game_id]).where('id NOT IN (?)', @inventory_item_things)
        end
      else
        @thing = Thing.all
        render json: @thing
      end
    end

    def destroy
      @thing= Thing.find(params[:id])
      if @thing
        render json: @thing.destroy
      end
    end


    def create
      @thing = Thing.create(thing_params)
      if @thing
        render json: @thing
      end
    end

    def show
      begin
        @thing = Thing.find(params[:id])
        render json: @thing
      rescue => e
        render json: []
      end
    end

    def update
      @thing = Thing.find(params[:id])
      render json: @thing.update(thing_params)
    end


    private
      def thing_params
        params.require(:thing).permit(:name, :encumbrance, :game_id, :armour_current_value, :armour_cap_value, :offensive_factor, :description)
      end
end
