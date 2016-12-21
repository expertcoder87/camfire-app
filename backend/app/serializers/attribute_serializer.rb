class AttributeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :game_id
end
