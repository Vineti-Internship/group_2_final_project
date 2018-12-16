Rails.application.routes.draw do
  resources :final_orders
  resources :couriers
  get 'couriers/:type_name', :to => 'couriers#show'
  resources :orders_products
  resources :stores
  resources :orders
  resources :products

  resources :users
  resources :sessions, only: [:create, :destroy]

end