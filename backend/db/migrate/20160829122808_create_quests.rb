class CreateQuests < ActiveRecord::Migration[5.0]
  def change
    create_table :quests do |t|
      t.string :name
      t.belongs_to :character

      t.timestamps
    end
  end
end
