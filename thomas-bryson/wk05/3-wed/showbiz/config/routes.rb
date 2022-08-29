Rails.application.routes.draw do
  get 'session/new'
  resources :directors
end
