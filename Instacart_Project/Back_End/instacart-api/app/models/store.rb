class Store < ApplicationRecord
    has_many :products, dependent: :destroy
    validates_associated :products
end
