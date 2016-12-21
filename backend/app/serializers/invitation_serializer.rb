class InvitationSerializer < ActiveModel::Serializer
  attributes :email, :game_id, :status, :id
end
