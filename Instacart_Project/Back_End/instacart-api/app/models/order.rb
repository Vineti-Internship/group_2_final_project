class Order < ApplicationRecord
  belongs_to :user
  has_and_belongs_to_many :products
#   accepts_nested_attributes_for :products
  validates :user_id, presence: true
end
