class GameSerializer < ActiveModel::Serializer

  attributes :world_name, :description, :id, :character_ids, :image_url, :current_user_character_id, :thing_ids,
    :shared_to_market, :starting_xp, :story_ids, :game_attribute_ids, :skill_ids, :gm_id, :created_by_id,
    :invitation_ids, :can_be_shared


  def image_url
    begin
      APP_CONFIG.host["url"] + object.stories.first.scenes.first.avatar.url
    rescue =>e
    end
  end

  def current_user_character_id
    character = Character.where(user_id: current_user.id, game_id: object.id)
    if character.present?
      character[0].id
    else
      nil
    end
  end

  def can_be_shared
    if current_user.id == object.created_by_id && !object.shared_to_market
      true
    else
      false
    end
  end
end
