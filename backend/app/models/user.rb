class User < ActiveRecord::Base
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

	has_many :user_auths, :dependent => :destroy

  validates :email, uniqueness: {case_sensitive: false}
	validates_length_of :email, :maximum => 255
	validates_length_of :encrypted_password, :maximum => 255
	validates_length_of :reset_password_token, :maximum => 255
	validates_length_of :current_sign_in_ip, :maximum => 255
	validates_length_of :last_sign_in_ip, :maximum => 255
	validates_length_of :firstname, :maximum => 255
	validates_length_of :lastname, :maximum => 255
	validates_length_of :confirmation_token, :maximum => 255
	validates_length_of :unconfirmed_email, :maximum => 255

	before_validation :strip_whitespaces

  after_create :add_default_role

	def strip_whitespaces
		self.firstname = self.firstname.strip if !self.firstname.nil?
		self.email = self.email.strip if !self.email.nil?
		self.lastname = self.lastname.strip if !self.lastname.nil?
	end

  def games_as_gm
    Game.where(gm_id: id)
  end

  def self.add_default_admin
    user = User.where(email: 'admin@example.com').first_or_initialize
    if user.id.blank?
      user.password = '123123123'
      user.password_confirmation = '123123123'
      user.save(validate: false)
    end
    user.remove_role :narrator if user.roles.present?
    user.add_role :admin
  end

  private
    def add_default_role    
      self.add_role :narrator if self.roles.blank? 
    end

end
