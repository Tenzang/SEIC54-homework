Rails.application.routes.draw do
  root :to => 'beaches#home'
  get '/beaches' => 'beaches_path#beaches'
end
