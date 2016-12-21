class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :public_description, :game_id, :share_to_players
end
