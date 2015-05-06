AuthDemo::Application.routes.draw do
  root :to => "static_pages#root"

  resource :session, only: [:create, :destroy, :new]
  resource :user, only: [:create, :new, :show] do
    resource :counter, only: [:update]
  end
end
