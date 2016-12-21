class Context < ApplicationRecord
  validates :name, :presence => true, :length => {maximum: 50}
  belongs_to :game
  has_many :skills
end
