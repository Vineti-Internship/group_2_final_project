class FixColumnNameProduct < ActiveRecord::Migration[5.2]
  def change
    rename_column :orders, :price, :pCost
    rename_column :products, :pCost, :price
  end
end
