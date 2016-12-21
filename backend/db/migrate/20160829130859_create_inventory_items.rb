class CreateInventoryItems < ActiveRecord::Migration[5.0]
  def change
    create_table :inventory_items do |t|
      t.belongs_to :thing
      t.belongs_to :inventory

      t.timestamps
    end
  end
end
