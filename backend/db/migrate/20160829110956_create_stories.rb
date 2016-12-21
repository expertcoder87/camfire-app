class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.string :public_description
      t.string :secret_gm_overview
      t.boolean :share_to_players
      t.belongs_to :game

      t.timestamps
    end
  end
end
