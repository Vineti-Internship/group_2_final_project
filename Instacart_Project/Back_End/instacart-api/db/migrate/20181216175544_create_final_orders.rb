class CreateFinalOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :final_orders do |t|
      t.references :order, foreign_key: true
      t.references :user, foreign_key: true
      t.references :courier, foreign_key: true

      t.timestamps
    end
  end
end
