class OrderSerializer < ActiveModel::Serializer
  attributes :id, :pCost
  has_one :user
end
