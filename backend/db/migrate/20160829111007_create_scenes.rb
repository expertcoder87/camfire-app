class CreateScenes < ActiveRecord::Migration[5.0]
  def change
    create_table :scenes do |t|
      t.string :name
      t.string :secret_story_details
      t.boolean :share_image
      t.belongs_to :story

      t.timestamps
    end
  end
end
