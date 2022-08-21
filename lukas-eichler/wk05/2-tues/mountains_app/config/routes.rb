Rails.application.routes.draw do
  root :to => 'mountains#index'
  get '/mountains/new' => 'mountains#new', :as => :new_mountain
  get '/mountains' => 'mountains#index'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id/edit' => 'mountains#edit', :as => :edit_mountain
  get '/mountains/:id' => 'mountains#show', :as => :mountain
  post '/mountains/:id' => 'mountains#update'
  get '/mountains/:id/delete' => 'mountains#destroy', :as => :delete_mountain
end
