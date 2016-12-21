class Api::Gm::ThingsController < Shared::ThingsController

  def upload_image
    if params[:file] && (params[:file].size < 1000000)
      @thing = Thing.find(params[:resource])
      @thing.avatar = params[:file]
      if @thing.save
        render json: @thing
      end
    end
  end

end
