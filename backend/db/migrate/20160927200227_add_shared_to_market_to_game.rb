class AddSharedToMarketToGame < ActiveRecord::Migration[5.0]
  def change
    add_column :games, :shared_to_market, :boolean, default: false
  end
end
