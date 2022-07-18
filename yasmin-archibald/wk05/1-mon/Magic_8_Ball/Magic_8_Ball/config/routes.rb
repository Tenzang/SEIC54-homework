Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/fortune' => 'pages#fortune'
end
