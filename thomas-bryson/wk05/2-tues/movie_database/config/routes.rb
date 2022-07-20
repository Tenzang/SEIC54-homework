Rails.application.routes.draw do

  root :to => 'movies#home'
  post '/movies' => 'movies#create'
  get '/movies/show' => 'movies#show'
  get '/movies/:id' => 'movies#show', :as => :movie
  get '/movies/:id/edit' => 'movies#edit', :as => :edit_movie
  get '/index' => 'movies#index'
  get '/new' => 'movies#new'
  get '/home' => 'movies#home'

end
