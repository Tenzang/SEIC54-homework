Rails.application.routes.draw do
  root :to => 'oceans#home'


  get '/oceans' => 'oceans#index' # Shows all oceans

  get '/oceans/new' => 'oceans#new', :as => :new_ocean # NEW OCEAN FORM
  post '/oceans' => 'oceans#create' #POSTES NEW OCEAN
  get '/oceans/:id' => 'oceans#show', :as => :ocean #Shows detail info on selected ocean
  get '/oceans/:id/edit' => 'oceans#edit', :as => :edit_ocean #edits ocean info
  post '/oceans/:id' => 'oceans#update' #updates ided ocean
  get '/ocean/:id/delete' => 'oceans#destroy', :as => :delete_ocean

end
