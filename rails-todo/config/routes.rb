Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'tasks#index'

  resources :tasks, only: %i[index create update destroy] do
    member do
      put :complete
      put :uncomplete
    end
  end
end
