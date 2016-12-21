class Api::Gm::CharactersController < Shared::CharactersController

  def upload_image
    if params[:file] && (params[:file].size < 1000000)
      @character = Character.find(params[:resource])
      @character.avatar = params[:file]
      if @character.save
        render json: @character
      end
    end
  end

end
