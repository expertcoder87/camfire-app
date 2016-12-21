class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.belongs_to :game
      t.belongs_to :context

      t.timestamps
    end
  end
end
