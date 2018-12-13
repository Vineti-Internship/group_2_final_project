class OrdersProduct < ApplicationRecord
  belongs_to :order,:validate => true
  belongs_to :product,:validate => true
  validates :quantinity, presence: true,numericality: {greater_than: 0,less_than_or_equal_to: 10000,  only_integer: true }

end
