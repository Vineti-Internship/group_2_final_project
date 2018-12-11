class ProductSerializer < ActiveModel::Serializer
  attributes :id, :Name, :price, :quantinity, :imageUrl, :description
  has_one :order
end
