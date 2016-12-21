class Invitation < ApplicationRecord
  status_list = ["Sent", "Accepted"]
  belongs_to :game
  validates_inclusion_of :status, :in => status_list

end
