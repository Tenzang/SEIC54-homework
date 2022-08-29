Rails.application.routes.draw do
  get 'products/index'
  get 'products/new'
  get 'products/edit'
  get 'products/show'
  get 'brands/index'
  get 'brands/new'
  get 'brands/create'
  get 'brands/edit'
  get 'brands/update'
  get 'brands/showdestroy'
  get 'brands/private'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
