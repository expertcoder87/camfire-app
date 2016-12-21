class Shared::ActionsController < ApplicationController
  def index
    if params[:character_id] && params[:context]
      if params[:context] == 'all'
        @action = Action.where(character_id: params[:character_id])
      else
        @action = Action.where(character_id: params[:character_id])
      end
      render json: @action
    elsif params[:character_id]
      @action = Action.where(character_id: params[:character_id])
      render json: @action
    else
      render json: Action.all
    end
  end

  def update
    @action = Action.find(params[:id])
    @action.update(level: params[:level])
    $client.publish "/notifications", {action: ActionSerializer.new(@action).as_json}.to_json
    render json: @action
  end

  def show
    render json: Action.find(params[:id])
  end

  def destroy
    begin
      @action = Action.find(params[:id])
      render json: @action.destroy
    rescue => e
      render json: []
    end
  end


  # def create
  #   @action =  Action.create(level: action_params[:level], )
  #   render json: @action
  # end

  # def destroy
  #   Quest.destroy(params[:id])
  # end

  # private
  #   def action_params
  #     params.require(:action).permit(:level)
  #   end
end
