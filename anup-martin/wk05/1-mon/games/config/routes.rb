Rails.application.routes.draw do
  get 'magic/home'
  get 'magic/results'
  get 'rockpaperscissors/rockpaperscissors'
  get 'rockpaperscissors/rpsresult'
  get 'secretnumber/secretnumber'
  get 'secretnumber/snresult'
end



Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/games' => 'games#index'

  get '/games/magic8ball' => 'games#magic8ball'
  get '/games/magic8ball/:question' => 'games#question'

  get '/games/secretnumber' => 'games#secretnumber'
  get '/games/secretnumber/result' => 'games#snresult'

  get '/games/rockpaperscissors' => 'games#rockpaperscissors'  
  get '/games/rockpaperscissors/:throw' => 'games#rpsresult'

end
