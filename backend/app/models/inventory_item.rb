class InventoryItem < ApplicationRecord
  belongs_to :inventory
  belongs_to :thing
  validates  :quantity, :numericality => { :only_integer => true, :greater_than_or_equal_to => 0}
  before_destroy :publish_item
  amoeba do
    enable
  end

  def publish_item
    $client.publish "/notifications", {inventory_item: InventoryItemSerializer.new(self).as_json}.to_json
  end

end
