class FixColumnNameOrder < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :price, :pCost
  end
end
