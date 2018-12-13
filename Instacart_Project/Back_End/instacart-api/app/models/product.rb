class Product < ApplicationRecord    
    belongs_to :store, :validate => true
    has_and_belongs_to_many :order,optional: true
    validates :Name, presence: true, length: {maximum: 50}
    validates :price, presence: true,numericality: {greater_than: 0}
    validates :store_id, presence: true
    validates :description, presence: true, length: {maximum: 1000}
    validates :imageUrl, presence: true, format: { with: /http(s?):\/\/.*\.(jpeg|jpg|gif|png)/ix, message: "must be a URL for GIF, JPG or PNG image."}
end
