class Store < ApplicationRecord
    has_many :products, dependent: :destroy
    validates_associated :products
    validates :name, presence: true, length: {maximum: 50}
    validates :logo, presence: true, format: { with: /http(s?):\/\/.*\.(jpeg|jpg|gif|png)/ix, message: "must be a URL for GIF, JPG or PNG image."}
    validates :description, presence: true, length: {maximum: 1000}
end
