class Shared::StoriesController < ApplicationController

    def index
      if params[:ids]
        begin
          render json: Story.find(params[:ids])
        rescue => e
          render json: []
        end
      else
        @story = Story.all
        render json: @story
      end
    end

    def destroy
      begin
        @story= Story.find(params[:id])
        if @story
          @story.scenes.destroy_all
          render json: @story.destroy
        else
          render json: []
        end
      rescue =>e
        render json: []
       end
    end


    def create
      @story = Story.create(story_params)
      if @story
        render json: @story
      end
    end

    def show
      begin
        @story = Story.find(params[:id])
        render json: @story
      rescue => e
        render json: []
      end
    end

    def update
      @story = Story.find(params[:id])
      render json: @story.update(story_params)
    end


    private
      def story_params
        params.require(:story).permit(:title, :game_id , :public_description)
      end
end
