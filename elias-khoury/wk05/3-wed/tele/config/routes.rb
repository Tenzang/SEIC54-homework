Rails.application.routes.draw do

  root to: "phones#index"
  resources :phones
  resources :companies
end
