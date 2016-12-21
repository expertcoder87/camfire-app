class CharacterSerializer < ActiveModel::Serializer

  attributes :name, :id, :description, :game_id, :image_url, :inventory_ids, :available_currency_ammount, :user_id,
    :armour_current_value, :armour_cap_value,  :hp_cap_value, :hp_current_value, :fp, :xp, :currency, :gifts, :faults,
    :character_type
  #belongs_to :game, class_name: "Game"

  def image_url
    APP_CONFIG.host["url"] + object.avatar.url
  end
end
