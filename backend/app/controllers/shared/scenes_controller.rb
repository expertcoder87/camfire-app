class Shared::ScenesController < ApplicationController
  def index
    if params[:story_id]
      @scenes = Scene.where(story_id:params[:story_id])
    elsif params[:game_id]
      @scenes = Scene.joins("inner join stories on stories.id = scenes.story_id and stories.game_id = #{params[:game_id]}")
    elsif params[:character_id]
      character = Character.find(params[:character_id])
      @scenes = Scene.joins("inner join stories on stories.id = scenes.story_id").where("stories.game_id=?", character.game_id)
    else
      @scenes = Scene.all
    end
    render json: @scenes
  end

  def show
    render json: Scene.find(params[:id])
  end
end
