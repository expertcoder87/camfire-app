class Api::V1::ScenesController < Shared::ScenesController
  def index
    if params[:story_id]
      @scenes = Scene.where(story_id:params[:story_id])
    elsif params[:game_id]
      @scenes = Scene.joins("inner join stories on stories.id = scenes.story_id and stories.game_id = #{params[:game_id]}").where('scenes.share_image=?', true)
    elsif params[:character_id]
      character = Character.find(params[:character_id])
      @scenes = Scene.joins("inner join stories on stories.id = scenes.story_id").where("stories.game_id=? and scenes.share_image=?", character.game_id, true).order(:shared_at)
    else
      @scenes = Scene.all
    end
    render json: @scenes
  end
end
