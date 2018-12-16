class FinalizeCourierModel < ActiveRecord::Migration[5.2]
  def change
    add_column :couriers, :name, :string
  end
end
