Rails.application.routes.draw do
  root to: 'pages#home'

  get '/magic' => 'magic#magic'
  get '/outcome' => 'magic#outcome'

  get '/number' => 'number#number'
  get '/result' => 'number#result'

  get '/sps' => 'sps#sps'
  get '/game' => 'sps#game'
end
