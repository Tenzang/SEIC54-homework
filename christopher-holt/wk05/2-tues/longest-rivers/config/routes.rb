Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'rivers#index'

  get '/rivers' => 'rivers#index'
  get '/rivers/new' => 'rivers#new', :as => :new_river
  post '/rivers' => 'rivers#create'

  get '/rivers/:id' => 'rivers#show', :as => :river
  get '/rivers/:id/edit' => 'rivers#edit', :as => :edit_river
  post '/rivers/:id' => 'rivers#update'

  get '/rivers/:id/delete' => 'rivers#destroy', :as => :delete_river
end
