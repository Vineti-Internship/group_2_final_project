class User < ApplicationRecord
  acts_as_token_authenticatable
  
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :first_Name, presence: true
  validates :last_Name, presence: true
  validates :address, presence: true
  validates :phone, presence: true
  validates :email, presence: true
  validates :password, presence: true
 
end
