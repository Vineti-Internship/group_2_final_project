class CreateOrdersProducts < ActiveRecord::Migration[5.2]
  def change
    drop_table :orders_products
    create_table :orders_products do |t|
      t.references :order, foreign_key: true
      t.references :product, foreign_key: true
      t.integer :quantinity

      t.timestamps
    end
  end
end
