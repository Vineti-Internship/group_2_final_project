class UserMailer < ApplicationMailer
default from: "Instacart@gmail.com"
  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.signup_confirmation.subject
  #
  def signup_confirmation(user)
    @user = user

    mail(to: user.email, subject: "Sign Up Confirmation")
  end

  def order_details(order)
    @order = order

    mail(to: order.user.email, subject: "Your Order Details")
  end
end
