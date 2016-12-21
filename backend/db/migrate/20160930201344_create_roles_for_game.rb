class CreateRolesForGame < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :gm_id, :integer
    add_column :games, :created_by_id, :integer
  end
end
