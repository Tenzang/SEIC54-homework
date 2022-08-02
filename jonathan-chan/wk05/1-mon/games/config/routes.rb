Rails.application.routes.draw do
  root :to => 'pages#home' #homepage2

  get '/magicball' => 'magicball#magicball'
  get '/magicball/fate' => 'magicball#fate'

  get '/rockpaperscissor' => 'rockpaperscissor#rockpaperscissor'
  get '/rockpaperscissor/choice' => 'rockpaperscissor#choice'

  get '/secretnumber' => 'secretnumber#secretnumber'
  get '/secretnumber/choice' => 'secretnumber#choice'

end
