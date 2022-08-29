Rails.application.routes.draw do
root :to => 'Houses#index'

get '/houses' => 'houses#index'
post '/houses/new' => 'houses#new', :as => :new_house
post '/houses' => 'houses#create'
get '/houses/:id' => 'houses#show', :as => :house
get '/houses/:id/edit' => 'houses#edit', :as => :edit_house
post '/houses/:id' => 'houses#update'
get '/houses/:id/delete' => 'houses#destroy', :as => :delete_house

end
