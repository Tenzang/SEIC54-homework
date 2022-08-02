Rails.application.routes.draw do
  root :to => 'pages#home' 

  get '/magic8ball' => 'magic8ball#start'
  get '/magic8ball/result' => 'magic8ball#result'

  get '/secretnumber' => 'secretnumber#start'
  get '/secretnumber/result' => 'secretnumber#result'
end
