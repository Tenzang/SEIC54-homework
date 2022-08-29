Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => "pages#home"
  get '/games' => 'games#index'

  get '/games/eightball' => 'games#eightball'
  get '/games/eightball/:question' => 'games#question'

  
end
