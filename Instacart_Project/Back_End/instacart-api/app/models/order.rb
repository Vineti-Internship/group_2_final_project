class Order < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :products
  has_one :final_order
  validates :user_id, presence: true
end
