class Shared::GamesController < ApplicationController
  respond_to :json

  def index
    invitations = Invitation.where(email: current_user.email)
    @games = Game.where(id: invitations.pluck(:game_id))
    render :json=> @games
    end

  def show
     @game = Game.find(params[:id])
     render json: @game, status: :ok
  end

  def create
    @game = Game.create(game_params)
    @game.gm_id = current_user[:id]
    @game.created_by_id = current_user[:id]
    @game.save()
    render json: @game, status: :ok
  end

  def update
    @game = Game.find(params[:id])
    if @game
      @game.update(game_params)
      render json: @game
    end
  end

  private
    def game_params
      params.require(:game).permit(:shared_to_market, :id, :starting_xp, :description, :world_name)
    end
end
