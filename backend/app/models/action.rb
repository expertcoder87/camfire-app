class Action < ApplicationRecord
  belongs_to :character

  validates :level, inclusion: { in: %w(Terrible Poor Mediocre Fair Good Great Superb), message: "Not a valid level"}
  validates :target_type, inclusion: { in: %w(Skill Attribute), message: "Not a valid target"}
  before_destroy :publish_action

  def publish_action
    $client.publish "/notifications", {action: ActionSerializer.new(self).as_json}.to_json
  end

  def action_name
    if target_type == 'Skill'
      Skill.find(target_id).name
    elsif target_type == 'Attribute'
      Attribute.find(target_id).name
    end
  end

  def description
    if target_type == 'Skill'
      Skill.find(target_id).description
    elsif target_type == 'Attribute'
      Attribute.find(target_id).description
    end
  end

  def context
    if target_type == 'Skill'
      context = Skill.find(target_id).context
      context &&  context.name
    elsif target_type == 'Attribute'
      nil
    end
  end
end
