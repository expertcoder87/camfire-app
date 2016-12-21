class Shared::AttributesController < ApplicationController

  def show
    begin
      @attribute = Attribute.find(params[:id])
      render json: @attribute
    rescue =>e
      render json: []
    end
  end

  def index
    #return actions which are not assigned
    if params[:ids]
      begin
        render json: Attribute.find(params[:ids])
      rescue => e
        render json: []
      end
    elsif params[:character_id]
      @character=Character.find(params[:character_id])
      @assignedAttributes  = Action.where(character_id:params[:character_id], target_type:'Attribute').pluck(:target_id)
      if @assignedAttributes.empty?
        render json: Attribute.where(game_id: @character.game_id)
      else
        render json: Attribute.where(game_id: @character.game_id).where('id NOT IN (?)', @assignedAttributes)
      end
    else
      render json: Attribute.all
    end
  end

  def destroy
    @attribute= Attribute.find(params[:id])
    if @attribute
      render json: @attribute.destroy
    end
  end

  def create
    @attribute = Attribute.create(attribute_params)
    if @attribute
      render json: @attribute
    end
  end

  def show
    begin
      @attribute = Attribute.find(params[:id])
      render json: @attribute
    rescue => e
      render json: []
    end
  end

  def update
    @attribute = Attribute.find(params[:id])
    render json: @attribute.update(attribute_params)
  end

  private
    def attribute_params
      params.require(:attribute).permit(:name, :game_id , :description)
    end
end
