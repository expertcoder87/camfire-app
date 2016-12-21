class CreateAttributes < ActiveRecord::Migration[5.0]
  def change
    create_table :attributes do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.belongs_to :game

      t.timestamps
    end
  end
end
