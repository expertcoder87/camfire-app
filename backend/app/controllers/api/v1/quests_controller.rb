class Api::V1::QuestsController < ApplicationController

  def index
    if params[:character_id] && params[:name]
      quest = Quest.find_by(character_id: params[:character_id], name: params[:name])
      render json: quest
    else
      render json: Quest.all
    end
  end

  def create
    @quest =  Quest.create(name: quest_params[:name])
    render json: @quest
  end

  def destroy
    Quest.destroy(params[:id])
  end

  private
    def quest_params
      params.require(:quest).permit(:name)
    end
end
