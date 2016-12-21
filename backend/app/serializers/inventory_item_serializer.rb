class InventoryItemSerializer < ActiveModel::Serializer

  attributes :quantity, :id, :thing_id, :inventory_id
  #has_many :characters, class_name: "Character"

end
