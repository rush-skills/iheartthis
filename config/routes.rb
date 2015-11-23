Rails.application.routes.draw do

	get '/dashboard' => "dashboard#index",as: :dashboard
  resources :images do
  	member do
  		post :add_heart
  	end
  end
  root to: 'visitors#index'
  get '/auth/:provider/callback' => 'sessions#create'
  get '/signin' => 'sessions#new', :as => :signin
  get '/signout' => 'sessions#destroy', :as => :signout
  get '/auth/failure' => 'sessions#failure'
end
