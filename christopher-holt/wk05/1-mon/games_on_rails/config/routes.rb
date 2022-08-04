Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#welcome'

  get '/magic' => 'magic#welcome'
  get '/magic/answer' => 'magic#answer'

  get '/secret' => 'secret#welcome'
  get '/secret/answer' => 'secret#answer'
end
