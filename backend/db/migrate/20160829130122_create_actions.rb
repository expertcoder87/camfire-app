class CreateActions < ActiveRecord::Migration[5.0]
  def change
    create_table :actions do |t|
      t.string :level
      t.integer :target_type
      t.integer :target_id
      t.belongs_to :character

      t.timestamps
    end
  end
end
