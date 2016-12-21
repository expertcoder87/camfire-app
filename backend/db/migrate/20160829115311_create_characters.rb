class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :description
      t.string :type
      t.string :gifts
      t.string :faults
      t.string :currency
      t.float :available_currency_ammount
      t.integer :armour_cap_value
      t.integer :armour_current_value
      t.integer :hp_cap_value
      t.integer :hp_current_value
      t.integer :xp
      t.integer :fp
      t.belongs_to :game
      t.belongs_to :user


      t.timestamps
    end
  end
end
