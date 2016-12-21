class Quest < ApplicationRecord
  belongs_to :character
  has_many :quest_items

  amoeba do
    enable
  end
end
