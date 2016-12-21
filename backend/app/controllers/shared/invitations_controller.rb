class Shared::InvitationsController < ApplicationController
  def show
    begin
      @invitation = Invitation.find(params[:id])
      render json: @invitation
    rescue => e
      render json: []
    end
  end

  def create
    @invitation = Invitation.create(invitation_params)
    if @invitation
      render json: @invitation
    end
  end

  def destroy
    @invitation= Invitation.find(params[:id])
    if @invitation
      render json: @invitation.destroy
    end
  end

  private
    def invitation_params
      params.require(:invitation).permit(:email, :status, :game_id)
    end
end
