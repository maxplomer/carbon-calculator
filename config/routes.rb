AuthDemo::Application.routes.draw do
  root :to => "static_pages#root"

  resources :posts, only: [:create, :index, :show] do
    resources :comments, only: [:show, :create] do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end

    member do
      put '/upvote' => 'posts#upvote'
    end
  end

  ### rails auth routes ###
  # resource :session, only: [:create, :destroy, :new]
  # resource :user, only: [:create, :new, :show] do
  #   resource :counter, only: [:update]
  # end
end
