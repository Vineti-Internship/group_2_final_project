class CourierSerializer < ActiveModel::Serializer
  attributes :id, :type_name, :price, :image
end
