class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :Name
      t.decimal :price, precision: 8, scale: 2
      t.references :store, foreign_key: true
      t.references :order, foreign_key: true
      t.integer :quantinity
      t.string :imageUrl
      t.text :description

      t.timestamps
    end
  end
end
