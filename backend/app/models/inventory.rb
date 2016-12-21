class Inventory < ApplicationRecord

  belongs_to :character
  has_many :inventory_items , class_name: InventoryItem
  has_many :things, through: :inventory_items
  validates :name, :uniqueness => {scope: :character, message: " is already taken"}


  def current_capacity
    capacity=0
    for item in self.inventory_items
      capacity += item.quantity * item.thing.encumbrance
    end
    capacity
  end

  amoeba do
    enable
  end
  
end
