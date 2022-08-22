Rails.application.routes.draw do

  root :to => 'pages#homepage'

  get '/magic' => 'magic#home'

  get '/result' => 'magic#result'

  get '/rps' => 'rps#home'

  get '/rpsresult' => 'rps#rpsresult'

  get '/secret' => 'secret#home'


end