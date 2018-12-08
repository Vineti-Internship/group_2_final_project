class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_Name, :last_Name, :address, :phone, :email
end
