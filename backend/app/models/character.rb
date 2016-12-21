class Character < ApplicationRecord
  after_create :create_equipped_inventory
  after_create :create_default_quest
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing_character.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  validates :character_type, inclusion: { in: %w(PC NPC), message: "Not a valid Charater Type"}
  validates_with AttachmentSizeValidator, attributes: :avatar, less_than: 1.megabytes

  belongs_to :game
  belongs_to :user
  has_many :inventories, class_name: Inventory
  validates :available_currency_ammount, numericality: {less_than_or_equal_to: 9999}
  validates :armour_cap_value, numericality: {only_integer: true, less_than_or_equal_to: 99}
  validates :hp_cap_value, numericality: {only_integer: true, less_than_or_equal_to: 99}
  validates :xp, numericality: {only_integer: true, less_than_or_equal_to: 99}
  validates :fp, numericality: {only_integer: true, less_than_or_equal_to: 99, allow_nil: true}
  has_many :quests
  validates :name, :uniqueness => {case_sensitive: false, scope: :game,  message: " is already taken"}

  amoeba do
     include_association :inventories
     include_association :quests
     customize(lambda { |original_object,new_object|

       if original_object.avatar.path and File.exist?(original_object.avatar.path)
         file_location = original_object.avatar.path
         new_object.avatar = File.open(file_location)
       end
     })
  end

  private

    def create_equipped_inventory
      self.inventories.create(name: "Equipped", capacity: 999)
    end

    def create_default_quest
      self.quests.create(name: 'Default Quest')
    end
end
