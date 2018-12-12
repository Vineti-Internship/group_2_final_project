class ProductSerializer < ActiveModel::Serializer
  attributes :id, :Name, :price, :quantinity, :imageUrl, :description,:sName
  def sName
    object&.store&.name;
  end
  has_one :order
end
