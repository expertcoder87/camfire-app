class Api::V1::GamesController < Shared::GamesController
  def show
    if current_user
      @invitation = Invitation.where(email: current_user.email, game_id:params[:id], status:"Sent")
      if @invitation.length
        @invitation.update(status: 'Accepted')
      end
    end
    @game = Game.find(params[:id])
    render json: @game, status: :ok
  end
end
