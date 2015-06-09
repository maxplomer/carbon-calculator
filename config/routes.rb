AuthDemo::Application.routes.draw do
  devise_for :users
  root :to => "static_pages#root"

  resources :posts, only: [:create, :index, :show]
  resources :my_posts, only: [:index] 

  resources :footprints, only: [:create] 
  resources :my_footprints, only: [:index] 
  resources :recent_footprints, only: [:index] 

end
