class ProductSerializer < ActiveModel::Serializer
  attributes :id, :Name, :price,  :imageUrl, :description,:sName
  def sName
    object&.store&.name;
  end
  has_many :order
end
