class Api::Gm::UsersController < Shared::UsersController

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: get_user if params[:id].present? 
  end

  def update
    get_user.update(user_params)
    @user.roles.delete_all
    @user.add_role params[:user][:role_type].downcase.to_sym
    render json: @user
  end

  def destroy
    @user = get_user
    if @user
      render json: @user.destroy
    end
  end

  private
    def get_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :firstname, :lastname)
    end
end
