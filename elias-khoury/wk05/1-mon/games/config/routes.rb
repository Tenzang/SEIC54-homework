Rails.application.routes.draw do
  root to: 'pages#home'

  get '/magic_eight_ball/home' => 'magic_eight_ball#home'
  get '/magic_eight_ball/result' => 'magic_eight_ball#result'

  get '/secret_number/home' => 'secret_number#home'
  get '/secret_number/result' => 'secret_number#result'

  get '/rock_paper_scissors/home' => 'rock_paper_scissors#home'
  get '/rock_paper_scissors/result' => 'rock_paper_scissors#result'

end
