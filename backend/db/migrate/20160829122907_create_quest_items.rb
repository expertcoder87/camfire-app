class CreateQuestItems < ActiveRecord::Migration[5.0]
  def change
    create_table :quest_items do |t|
      t.string :description
      t.string :status
      t.belongs_to :quest

      t.timestamps
    end
  end
end
