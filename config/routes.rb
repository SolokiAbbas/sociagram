Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :edit, :index] do
      resources :follows, only: [ :index ]
    end
    post 'search', to: 'users#search'
    resources :likes, only: [:create, :destroy]
    resources :bookmarks, only: [:index, :create, :destroy]
    resources :follows, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :posts, except: [:edit, :update, :new] do
      resources :comments, only: [ :index ]
      resources :likes, only: [ :index ]
    end
    resources :comments, except: [:edit, :update, :new]
  end
end
