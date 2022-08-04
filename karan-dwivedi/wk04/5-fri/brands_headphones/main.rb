require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

# Tedious configuration: next week, Rails will do this for you automatically.
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

# Optional bonus:
ActiveRecord::Base.logger = Logger.new(STDERR)

# Model: a class that is backed by a database
class Brand < ActiveRecord::Base
end

class Headphone < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX

get '/brands' do
    @brands = Brand.all
    erb :brands_index
end

#NEW
get '/brands/new' do
    erb :brands_new
end

#CREATE
post '/brands' do
    brand = Brand.new
    brand.name = params[:name]
    brand.logo = params[:logo]
    brand.save
    redirect to("/brands/#{ brand.id }") # GET request for SHOW
end

#SHOW
get '/brands/:id' do
    @brand = Brand.find params[:id]
    erb :brands_show
end


# EDIT
# Pre-filled form for updating a brand
get '/brands/:id/edit' do
    @brand = Brand.find params[:id]
    erb :brands_edit
end



#UPDATE

# UPDATE
# Update a plant with the user's form data
post '/brands/:id' do
    brand = Brand.find params[:id]
    brand.name = params[:name]
    brand.country_of_origin = params[:country_of_origin]
    brand.logo = params[:logo]
    brand.save
    redirect to("/brands/#{ params[:id] }") # GET request
end


# DESTROY
# Delete a brand from the database
get '/brands/:id/delete' do
    brand = Brand.find params[:id]
    brand.destroy
    redirect to('/brands')
end


## HEADPHONES###################

get '/' do
    erb :home
end

# INDEX

get '/headphones' do
    @headphones = Headphone.all
    erb :headphones_index
end

#NEW
get '/headphones/new' do
    erb :headphones_new
end

#CREATE
post '/headphones' do
    headphone = Headphone.new
    headphone.name = params[:name]
    headphone.brand = params[:brand]
    headphone.price = params[:price]
    headphone.rating = params[:rating]
    headphone.save
    redirect to("/headphones/#{ headphone.id }") # GET request for SHOW
end

#SHOW
get '/headphones/:id' do
    @headphone = Headphone.find params[:id]
    erb :headphones_show
end


# EDIT
# Pre-filled form for updating a headphone
get '/headphones/:id/edit' do
    @headphone = Headphone.find params[:id]
    erb :headphones_edit
end

#UPDATE

# UPDATE
# Update a plant with the user's form data
post '/headphones/:id' do
    headphone = Headphone.find params[:id]
    headphone.name = params[:name]
    headphone.brand = params[:brand]
    headphone.rating = params[:rating]
    headphone.price = params[:price]
    headphone.save
    redirect to("/headphones/#{ params[:id] }") # GET request
end


# DESTROY
# Delete a headphone from the database
get '/headphones/:id/delete' do
    headphone = Headphone.find params[:id]
    headphone.destroy
    redirect to('/headphones')
end
