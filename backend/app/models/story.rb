class Story < ApplicationRecord
  belongs_to :game
  has_many :scenes

  amoeba do
    enable
  end
end
