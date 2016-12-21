class CreateInvitations < ActiveRecord::Migration[5.0]
  def change
    create_table :invitations do |t|
      t.string :email
      t.string :status
      t.belongs_to :game

      t.timestamps
    end
  end
end
