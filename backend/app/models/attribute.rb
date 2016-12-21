class Attribute < ApplicationRecord
  validates :name, :presence => true, length: {maximum: 50}
  validates :description, :presence => true, length: {maximum: 500}
  # validates :game_id, :presence => true
  belongs_to :game
  before_destroy :destroy_actions

  def destroy_actions
    Action.where(target_type:'Attribute', target_id: self.id).destroy_all
  end
end
