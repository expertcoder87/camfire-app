class CreateThings < ActiveRecord::Migration[5.0]
  def change
    create_table :things do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :armour_current_value
      t.integer :armour_cap_value
      t.float :offensive_factor
      t.float :encumbrance
      t.belongs_to :game
      t.timestamps
    end
  end
end
