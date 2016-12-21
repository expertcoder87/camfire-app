class UpdateStatusColumnOfQuestItem < ActiveRecord::Migration[5.0]
  def change
    remove_column :quest_items, :status
    add_column :quest_items, :is_complete, :boolean
  end
end
