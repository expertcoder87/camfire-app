class Game < ApplicationRecord

  validates :world_name, :presence => true, length: {maximum: 80}
  validates :description, :presence => true, length: {maximum: 500}
  belongs_to :gm, class_name: User
  belongs_to :created_by, class_name: User
  belongs_to :parent, class_name: Game
  has_many :characters,
           inverse_of: :game,
           foreign_key: :game_id
  has_many :skills
  has_many :stories
  has_many :game_attributes, class_name: 'Attribute'
  has_many :things
  has_many :invitations

  amoeba do
    exclude_association :invitations
  end

end
