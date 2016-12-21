class ThingSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :game_id, :image_url, :encumbrance, :armour_cap_value, :armour_current_value,
    :offensive_factor

  def image_url
    begin
      APP_CONFIG.host["url"] + object.avatar.url
    rescue =>e
    end
  end
end
