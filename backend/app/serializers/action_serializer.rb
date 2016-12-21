class ActionSerializer < ActiveModel::Serializer
  attributes :id, :level, :action_name, :description, :context, :target_type
end
