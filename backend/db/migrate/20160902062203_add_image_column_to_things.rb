class AddImageColumnToThings < ActiveRecord::Migration[5.0]
  def up
    add_attachment :things, :avatar
  end

  def down
    remove_attachment :things, :avatar
  end
end
