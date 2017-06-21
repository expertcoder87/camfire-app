class Api::Gm::UsersController < Shared::UsersController

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: get_user if params[:id].present? 
  end

  private
    def get_user
      User.find(params[:id])
    end
end
