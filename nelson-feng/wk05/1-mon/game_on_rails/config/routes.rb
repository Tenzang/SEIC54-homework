Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'

  get '/eightball' => 'eightball#eightball'
  get '/eightball/answer' => 'eightball#answer'

  get '/secretnumber' => 'secretnumber#secretnumber'
  get "/secretnumber/verdict" => 'secretnumber#verdict'

  get '/spr' => 'spr#spr'
  get '/spr/battle' => 'spr#battle'
end
