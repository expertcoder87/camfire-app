class AddCapacityToInventory < ActiveRecord::Migration[5.0]
  def change
    add_column :inventories, :capacity, :integer
  end
end
