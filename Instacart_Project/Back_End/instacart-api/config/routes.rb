Rails.application.routes.draw do
  resources :orders_products
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