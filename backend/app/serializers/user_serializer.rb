class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :role_type, :is_admin?, :is_narrator?, :is_creator?

  def is_admin?
    self.object.has_role? :admin
  end
  
  def is_creator?
    self.object.has_role? :creator
  end

  def is_narrator?
    self.object.has_role? :narrator
  end

  def role_type
    self.object.roles.first.name.try(:upcase)
  end
end
