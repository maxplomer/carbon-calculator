AuthDemo::Application.routes.draw do
  devise_for :users
  root :to => "static_pages#root"

  resources :posts, only: [:create, :index, :show] 
  resources :footprints, only: [:create] 
  resources :my_posts, only: [:index] 

end
