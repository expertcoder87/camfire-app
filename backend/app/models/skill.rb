class Skill < ApplicationRecord
  validates :name, :presence => true, length: {maximum: 50}
  validates :description, :presence => true, length: {maximum: 500}
  # validates :game_id, :presence => true
  belongs_to :game
  belongs_to :context
  before_destroy :destroy_actions

  def destroy_actions
    Action.where(target_type:'Skill', target_id: self.id).destroy_all
  end
end
