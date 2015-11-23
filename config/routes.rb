Rails.application.routes.draw do

	get '/dashboard' => "dashboard#index",as: :dashboard

  get "/mine" => 'images#my_index', as: :my_images
  get "/explore" => 'images#index', as: :images
  post "/explore" => 'images#create'
  get "/new" => 'images#new', as: :new_image
  get "/fast_new" => 'images#fast_new'
  post "/new" => 'images#create', as: :create_image
  get "/show/:id" => "images#show", as: :image
  get "/edit/:id" => "images#edit", as: :edit_image
  patch "/show/:id" => "images#update"
  delete "/show/:id" => "images#destroy"
  post "/heart/:id" => "images#add_heart", as: :add_heart

  root to: 'visitors#index'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'
end
