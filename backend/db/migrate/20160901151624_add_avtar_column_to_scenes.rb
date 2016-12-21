class AddAvtarColumnToScenes < ActiveRecord::Migration[5.0]
  def up
    add_attachment :scenes, :avatar
  end

  def down
    remove_attachment :scenes, :avatar
  end
end
