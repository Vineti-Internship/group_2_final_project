class FinalOrderSerializer < ActiveModel::Serializer
  attributes :id,:products

  has_one :order
  has_one :user
  has_one :courier

  def products
    object&.order&.products;
  end
end
