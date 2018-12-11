class AddColumnsToStore < ActiveRecord::Migration[5.2]
  def change
    add_column :stores, :name, :string
    add_column :stores, :logo, :string
    add_column :stores, :description, :text

  end
end
