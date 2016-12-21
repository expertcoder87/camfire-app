class CreateContexts < ActiveRecord::Migration[5.0]
  def change
    create_table :contexts do |t|
      t.string :name, null: false
      t.belongs_to :game

      t.timestamps
    end
  end
end
