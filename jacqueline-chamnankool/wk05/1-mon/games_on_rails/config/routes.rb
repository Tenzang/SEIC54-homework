Rails.application.routes.draw do
  root :to => "pages#home"
  get "/ball" => "ball#form"
  get "/ball/result" => "ball#result"
  get "/secret" => "secret#choose"
  get "/secret/result" => "secret#result"
  get "/rps" => "rps#choose"
  get "/rps/result" => "rps#result"
end
