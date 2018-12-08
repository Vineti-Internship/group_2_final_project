class Product < ApplicationRecord    
    belongs_to :store, :validate => true
    belongs_to :order,optional: true
    validates :Name, presence: true, length: {maximum: 50}
    validates :price, presence: true,numericality: {greater_than: 0}
    validates :quantinity, presence: true,numericality: {greater_than: 0,less_than_or_equal_to: 10000,  only_integer: true }
    validates :store_id, presence: true
    validates :description, presence: true, length: {maximum: 1000}
    validates :imageUrl, presence: true, format: { with: /http(s?):\/\/.*\.(jpeg|jpg|gif|png)/ix, message: "must be a URL for GIF, JPG or PNG image."}
end
