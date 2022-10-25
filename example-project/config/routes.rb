Rails.application.routes.draw do
  resources :users, only:[:index,:show,:create]
  resources :hits, only:[:index,:update]
  resources :pipes, only:[:index,:create]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/hello', to: 'application#hello_world'
  # Defines the root path route ("/")
  # root "articles#index"
end
