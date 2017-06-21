class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :firstname, :lastname, :is_admin?, :is_narrator?, :is_creator?

  def is_admin?
    self.object.has_role? :admin
  end
  
  def is_creator?
    self.object.has_role? :creator
  end

  def is_narrator?
    self.object.has_role? :narrator
  end
end
