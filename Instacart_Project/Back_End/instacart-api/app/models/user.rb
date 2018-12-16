class User < ApplicationRecord
  has_many :orders  
  has_many :final_orders

  acts_as_token_authenticatable
  
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_Name, presence: true, length: { maximum: 50, too_long: 'first name must have max 50 characters' }, format: { with: /\A[a-zA-Z]+\z|\A[a-zA-Z]+\-+[a-zA-Z]+\z/, message: 'Only allows letters and - character' }
  validates :last_Name, presence: true, length: { maximum: 50, too_long: 'last name must have max 50 characters' }, format: { with: /\A[a-zA-Z]+\z|\A[a-zA-Z]+\-+[a-zA-Z]+\z/, message: 'Only allows letters' }
  validates :address, presence: true
  validates :phone, presence: true, length: { minimum: 8, maximum: 50, too_long: 'phone must have max 50 characters', too_short: 'Phone can have at least 6 characters' }, format: { with: /\A\++\d+\z/, message: 'number must start with + character, then comes regional code and your number' }
  validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\-.]+\.[a-z]+\z/i, message: 'Invalid Email' }
  validates :password, presence: true, length: { minimum: 6, too_short: 'password must have at least 6 characters' } 
 
end
