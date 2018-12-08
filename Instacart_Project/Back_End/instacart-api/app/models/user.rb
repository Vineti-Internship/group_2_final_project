class User < ApplicationRecord
  acts_as_token_authenticatable
  
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_Name, presence: true, format: { with: /\A[a-zA-Z]+\z|\A[a-zA-Z]+\-+[a-zA-Z]+\z/, message: 'Only allows letters and - character' }
  validates :last_Name, presence: true, format: { with: /\A[a-zA-Z]+\z/, message: 'Only allows letters' }
  validates :address, presence: true
  # format: { with: /\A[a-zA-Z0-9\s]+\z/i, message: 'Only allows letters and numbers' }
  validates :phone, presence: true, format: { with: /\A\++\d+\z|\A\d+\z/, message: 'Only allows numbers and + character for regional numbers' }
  validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i, message: 'Invalid Email'}
  validates :password, presence: true
 
end
