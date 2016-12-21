class AddParentIdToGames < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :parent_id, :integer
  end
end
