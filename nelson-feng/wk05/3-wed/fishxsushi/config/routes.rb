Rails.application.routes.draw do
  root :to => 'pages#home'
  resources:fishes
  resources:dishes
end
