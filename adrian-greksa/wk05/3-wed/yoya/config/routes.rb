Rails.application.routes.draw do
  get 'recipes/index'
  get 'recipes/new'
  get 'recipes/edit'
  get 'recipes/show'
  get 'foods/index'
  get 'foods/new'
  get 'foods/edit'
  get 'foods/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
