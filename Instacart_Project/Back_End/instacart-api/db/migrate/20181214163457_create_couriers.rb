class CreateCouriers < ActiveRecord::Migration[5.2]
  def change
    create_table :couriers do |t|
      t.string :type_name
      t.numeric :price
      t.string :image

      t.timestamps
    end
  end
end
