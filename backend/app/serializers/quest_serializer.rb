class QuestSerializer < ActiveModel::Serializer
  attributes :id, :name, :quest_item_ids
end
