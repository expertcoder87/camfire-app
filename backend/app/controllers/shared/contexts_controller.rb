class Shared::ContextsController < ApplicationController
  def index
    if params[:character_id]
      character = Character.find(params[:character_id])
      @contexts = Context.where(game_id: character.game_id)
    elsif params[:game_id]
      @contexts = Context.where(game_id: params[:game_id])
    end
    render json: @contexts
  end

  def destroy
    @context= Context.find(params[:id])
    if @context
      render json: @context.destroy
    end
  end


  def create
    @context = Context.create(context_params)
    if @context
      render json: @context
    end
  end

  def show
    begin
      @context = Context.find(params[:id])
      render json: @context
    rescue => e
      render json: []
    end
  end

  def update
    @context = Context.find(params[:id])
    render json: @context.update(context_params)
  end


  private
    def context_params
      params.require(:context).permit(:name, :game_id)
    end
end
