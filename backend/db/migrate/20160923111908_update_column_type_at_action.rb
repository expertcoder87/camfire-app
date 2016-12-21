class UpdateColumnTypeAtAction < ActiveRecord::Migration[5.0]
  def change
    remove_column :actions, :target_type
    add_column :actions, :target_type, :string
  end
end
