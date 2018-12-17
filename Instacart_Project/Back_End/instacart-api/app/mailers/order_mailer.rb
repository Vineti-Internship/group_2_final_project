class OrderMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.order_mailer.order_confirmation.subject
  #
  def order_confirmation(final_order)
    @final_order = final_order

    mail(to: final_order.user.email, subject: "Order Confirmation")
  end
end
