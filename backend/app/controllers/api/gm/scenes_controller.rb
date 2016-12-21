class Api::Gm::ScenesController < Shared::ScenesController

    def create
      @scene  = Scene.new(scene_params)
      if @scene.save
        render json: {"scene": @scene}
      end
    end

    def update
      @scene  = Scene.find(params[:id])
      if params[:scene] && params[:scene][:shared_now]
        params[:scene][:shared_at] = Time.now
      end
      if @scene.update(scene_params)
        $client.publish "/notifications", {scene: SceneSerializer.new(@scene).as_json}.to_json
        render json: {"scene": @scene}
      end
    end

    def destroy
      @scene= Scene.find(params[:id])
      if @scene
        $client.publish "/notifications", {scene: SceneSerializer.new(@scene).as_json}.to_json
        render json: @scene.destroy
      end
    end

    def upload_image
      if params[:file] && (params[:file].size < 1000000)
        @scene = Scene.find(params[:resource])
        @scene.avatar = params[:file]
        if @scene.save
          render json: @scene
        end
      end
    end


    private
      def scene_params
        params.require(:scene).permit(:name, :secret_story_details, :story_id, :share_image, :shared_at)
      end

end
