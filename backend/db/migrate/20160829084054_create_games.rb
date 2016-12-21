class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :world_name, null: false
      t.string :description, null: false
      t.integer :starting_xp
      t.boolean :use_fudge_points

      t.timestamps
    end
  end
end
