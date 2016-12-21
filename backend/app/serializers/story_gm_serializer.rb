class StoryGmSerializer < ActiveModel::Serializer
  attributes :id, :title, :public_description, :game_id, :share_to_players, :secret_gm_overview
end
