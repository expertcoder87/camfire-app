class Api::V1::QuestItemsController < ApplicationController

  def index
    if params[:ids]
      @quest_items = QuestItem.where(id: params[:ids])
      render json: @quest_items
    else
      render json: Quest.all
    end
  end

  def create
    @quest_item =  QuestItem.create(quest_item_params)
    render json: @quest_item
  end

  def destroy
    QuestItem.destroy(params[:id])
  end

  def show
    render json: QuestItem.find(params[:id])
  end

  def update
    if params[:id]
      @item = QuestItem.find(params[:id])
      @item.update(quest_item_params)
    end
    render json: @item
  end

  private
    def quest_item_params
      params.require(:quest_item).permit(:description, :is_complete, :quest_id)
    end
end
