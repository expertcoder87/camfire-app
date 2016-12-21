class SkillSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :game_id, :context_id
end
