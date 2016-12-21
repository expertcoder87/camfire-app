class Api::V1::CharactersController < Shared::CharactersController

  def index
    if params[:ids]
      begin
        render json: Character.where(id:params[:ids], character_type: 'PC')
      rescue => e
        render json: []
      end
    elsif params[:game_id]
      @characters = Character.where(game_id: params[:game_id], character_type: 'PC')
      if @characters.empty?
        render json: @characters
      else
        render json: if (params[:assigned] == "false") then @characters.where(user_id: [nil, current_user.id]) else @characters end
      end
    else
      @characters = Character.all
      render json: @characters
    end
  end
end
