Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/eightball' => 'eightball#form'
  get '/eightball/result' => 'eightball#result'

  get '/secretnumber' => 'secretnumber#form'
  get '/secretnumber/result' => 'secretnumber#result'

end



