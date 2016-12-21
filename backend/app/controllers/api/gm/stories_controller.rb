class Api::Gm::StoriesController < Shared::StoriesController

  def index
    if params[:ids]
      begin
        render json: Story.find(params[:ids]), serializer: StoryGmSerializer
      rescue => e
        render json: []
      end
    else
      @story = Story.all
      render json: @story, serializer: StoryGmSerializer
    end
  end

  def show
    begin
      @story = Story.find(params[:id])
      render json: @story, serializer: StoryGmSerializer
    rescue => e
      render json: []
    end
  end

  private
    def story_params
      params.require(:story).permit(:title, :game_id , :public_description, :secret_gm_overview)
    end
end
