class FinalOrder < ApplicationRecord
  belongs_to :order
  belongs_to :user
  belongs_to :courier
end
