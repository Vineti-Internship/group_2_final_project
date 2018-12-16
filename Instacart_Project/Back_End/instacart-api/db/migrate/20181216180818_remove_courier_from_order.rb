class RemoveCourierFromOrder < ActiveRecord::Migration[5.2]
  def self.down
    remove_column :orders, :courier_id
  end
end
