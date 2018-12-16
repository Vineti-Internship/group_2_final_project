class AddCourierToOrder < ActiveRecord::Migration[5.2]
  def change
    add_reference :orders, :courier, foreign_key: true
  end
end
