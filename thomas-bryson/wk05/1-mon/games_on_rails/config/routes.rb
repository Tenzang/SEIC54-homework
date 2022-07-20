Rails.application.routes.draw do

  get '/homepage' => 'pages#homepage'

  get '/magic' => 'magic#home'

  get '/result' => 'magic#result'

  get '/rps' => 'rps#home'

  get '/rpsresult' => 'rps#rpsresult'

  get '/secret' => 'secret#home'


 # on the left is the filename and folder

 # on the right but left of the hash is the class/controller class- "rps_controller, rps"

 # on the right of the hash is the method(func) used within the controller --

 # the Router connects urls to functions. calls it from a browser url from a browser

end