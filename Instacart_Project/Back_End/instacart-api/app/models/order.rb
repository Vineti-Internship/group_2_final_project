class Order < ApplicationRecord
  belongs_to :user
  has_many :products
  validates :user_id, presence: true
end
