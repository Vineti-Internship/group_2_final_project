class OrderSerializer < ActiveModel::Serializer
  attributes :id, :pCost
#   ,:user_id
  has_many :products
#   def user_id
#     object&.user&.id;
#   end
end
