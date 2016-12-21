class Thing < ApplicationRecord
  validates :name, :presence => true, length: {maximum: 50}
  validates :description, :presence => true, length: {maximum: 500}
  before_destroy :destroy_inventory_items
  # validates :game_id, :presence => true
  belongs_to :game
  validates :name, :uniqueness => {case_sensitive: false, scope: :game,  message: " is already taken"}


  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing_thing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :avatar, less_than: 1.megabytes

  has_many :inventory_items, class_name: InventoryItem
  has_many :inventories, class_name: Inventory, through: :inventory_items

  amoeba do
     customize(lambda { |original_object,new_object|
       if original_object.avatar.path and File.exist?(original_object.avatar.path)
         file_location = original_object.avatar.path
         new_object.avatar = File.open(file_location)
       end
     })
  end

  def destroy_inventory_items
    self.inventory_items.destroy_all
  end

end
