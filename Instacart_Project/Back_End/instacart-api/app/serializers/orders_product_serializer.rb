class OrdersProductSerializer < ActiveModel::Serializer
  attributes :id, :quantinity
  has_one :order
  has_one :product
end
