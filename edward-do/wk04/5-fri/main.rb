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
class Butterfly < ActiveRecord::Base # can do this for as many classes as you want
end

class Plant < ActiveRecord::Base
end

class Array
end

get '/' do
    erb :home
end

# INDEX
get '/butterflies' do
    # connect to the database
    # set results as hash to true
    # SELECT * FROM butterflies
    @butterflies = Butterfly.all
    # render :butterflies_index
    erb :butterflies_index
end

# NEW
get '/butterflies/new' do
    erb :butterflies_new
end

#CREATE
post '/butterflies' do
    # query_db "INSERT INTO butterflies (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
    butterfly = Butterfly.new
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.save
    redirect to("/butterflies/#{ butterfly.id }") # GET request
end

# SHOW
# Show a single butterfly
get '/butterflies/:id' do
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_show
end

# EDIT
# Pre-filled form to edit an existing butterfly
get '/butterflies/:id/edit' do
    # get the butterfly
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_edit
    # render the form
end

# UPDATE 
# Update a butterfly with the user's form data
post '/butterflies/:id' do
    # query_db "UPDATE butterflies SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
    butterfly = Butterfly.find params[:id]
    butterfly.name = params[:name]
    butterfly.family = params[:family]
    butterfly.image = params[:image]
    butterfly.save 
    redirect to("/butterflies/#{ params[:id] }") # GET request
end

# DESTROY
get '/butterflies/:id/delete' do
    butterfly = Butterfly.find params[:id]
    butterfly.destroy
    redirect to('/butterflies')
end

# Plants ######################################################
# INDEX
# Show all the plants
get '/plants' do
    @plants = Plant.all
    erb :plants_index
end

# NEW
# Blank form for a new plant
get '/plants/new' do
    erb :plants_new
end

# CREATE 
# Create a new plant in the database from the user's form data
post '/plants' do
    # create the plant
    plant = Plant.new
    plant.name = params[:name]
    plant.image = params[:image]
    plant.save    
    # go somewhere else
    redirect to("/plants/#{ plant.id }") # GET request for SHOW
end

# SHOW 
# Show all the information for a single plant
get '/plants/:id' do
    @plant = Plant.find params[:id]
    erb :plants_show
end

# EDIT 
# Show you the existing plant data in a form
get '/plants/:id/edit' do
    @plant = Plant.find params[:id]
    erb :plants_edit
end

# UPDATE
# Update the database with new plant data for an existing plant
post '/plants/:id' do
    # find the plant
    plant = Plant.find params[:id]
    # update everything
    plant.name = params[:name]
    plant.image = params[:image]
    plant.save
    redirect to("/plants/#{ plant.id }")
    # redirect to show
end

# DELETE
# Delete a plant from the database
get '/plants/:id/delete' do
    plant = Plant.find params[:id]
    plant.destroy
    redirect to('/plants')
end

# TODO: add a connection close.
after do
    ActiveRecored::Base.connection.close # Housekeeping
end