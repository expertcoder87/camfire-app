class InventorySerializer < ActiveModel::Serializer

  attributes :name, :id, :character_id, :inventory_item_ids, :capacity, :current_capacity

  #belongs_to :game, class_name: "Game"

end
