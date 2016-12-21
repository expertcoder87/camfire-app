class AddCharacterTypeCharacter < ActiveRecord::Migration[5.0]
  def change
    add_column :characters, :character_type, :string
    add_column :inventory_items, :quantity, :integer
  end
end
