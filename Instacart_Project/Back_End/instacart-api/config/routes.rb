Rails.application.routes.draw do
  resources :couriers
  resources :orders_products
#   delete 'orders_products/:oId', :to => 'orders_products#destroy'
  resources :stores
  resources :orders
  resources :products
    # scope 'Instacart' do
    #     namespace :v1 do
    resources :users
    resources :sessions, only: [:create, :destroy]
    #     end
    # end
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end