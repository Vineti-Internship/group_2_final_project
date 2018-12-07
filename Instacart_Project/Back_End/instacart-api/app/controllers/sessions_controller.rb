class SessionsController < ApplicationController

    # when logging in do
    def create
      
     @user = User.where(email: params[:email]).first
 
     if @user&.valid_password?(params[:password])
        render json: @user.as_json(only: [:id, :email, :authentication_token])
     else
         head(:unauthorized)
     end
 
    end
 
    #when logging out do
    def destroy

     current_user = @user

     current_user&.authentication_token = nil

     if current_user.save
        head(:ok)
     else
        head(:unauthorized)
     end

    end
 
 end