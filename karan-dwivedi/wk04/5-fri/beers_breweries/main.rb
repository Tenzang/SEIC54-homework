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
class Beer < ActiveRecord::Base
end

class Brewery < ActiveRecord::Base
end

get '/' do
    erb :home
end

# INDEX

get '/beers' do
    @beers = Beer.all
    erb :beers_index
end

#NEW
get '/beers/new' do
    erb :beers_new
end

#CREATE
post '/beers' do
    beer = Beer.new
    beer.brand = params[:brand]
    beer.kind = params[:kind]
    beer.image = params[:image]
    beer.save
    redirect to("/beers/#{ beer.id }") # GET request for SHOW
end

#SHOW
get '/beers/:id' do
    @beer = Beer.find params[:id]
    erb :beers_show
end


# EDIT
# Pre-filled form for updating a beer
get '/beers/:id/edit' do
    @beer = Beer.find params[:id]
    erb :beers_edit
end



#UPDATE

# UPDATE
# Update a plant with the user's form data
post '/beers/:id' do
    beer = Beer.find params[:id]
    beer.brand = params[:brand]
    beer.kind = params[:kind]
    beer.image = params[:image]
    beer.save
    redirect to("/beers/#{ params[:id] }") # GET request
end


# DESTROY
# Delete a brand from the database
get '/beers/:id/delete' do
    beer = Beer.find params[:id]
    beer.destroy
    redirect to('/beers')
end


## BREWERIES###################

get '/' do
    erb :home
end

# INDEX

get '/breweries' do
    @breweries = Brewery.all
    erb :breweries_index
end

#NEW
get '/breweries/new' do
    erb :breweries_new
end

#CREATE
post '/breweries' do
    brewery = Brewery.new
    brewery.name = params[:name]
    brewery.state = params[:state]
    brewery.year = params[:year]
    brewery.save
    redirect to("/breweries/#{ brewery.id }") # GET request for SHOW
end

#SHOW
get '/breweries/:id' do
    @brewery = Brewery.find params[:id]
    erb :breweries_show
end


# EDIT
# Pre-filled form for updating a brewery
get '/breweries/:id/edit' do
    @brewery = Brewery.find params[:id]
    erb :breweries_edit
end

#UPDATE
# UPDATE
# Update a plant with the user's form data
post '/breweries/:id' do
    brewery = Brewery.find params[:id]
    brewery.name = params[:name]
    brewery.state = params[:state]
    brewery.year = params[:year]
    brewery.save
    redirect to("/breweries/#{ params[:id] }") # GET request
end


# DESTROY
# Delete a headphone from the database
get '/breweries/:id/delete' do
    brewery = Brewery.find params[:id]
    brewery.destroy
    redirect to('/breweries')
end
