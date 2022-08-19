Rails.application.routes.draw do
 
    root :to => 'icebergs#index' 
    get '/icebergs' => 'icebergs#index'
    get '/icebergs/new' => 'icebergs#new', :as => :new_iceberg
    post '/icebergs' => 'icebergs#create'
    get '/icebergs/:id' => 'icebergs#show', :as => :iceberg
    get '/icebergs/:id/edit' => 'icebergs#edit', :as => :edit_iceberg
    post '/icebergs/:id' => 'icebergs#update'
    get '/icebergs/:id/delete' => 'icebergs#destroy', :as => :delete_iceberg


end
