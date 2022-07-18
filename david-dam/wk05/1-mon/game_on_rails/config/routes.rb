Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magicball' => 'magicball#form'
  get '/magicball/info' => 'magicball#info'

  get '/secretnumber' => 'secretnumber#form'
  get '/secretnumber/info' => 'secretnumber#info'
end
