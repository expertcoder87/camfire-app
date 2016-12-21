class QuestItemSerializer < ActiveModel::Serializer
  attributes :id, :description, :quest_id, :is_complete
end
