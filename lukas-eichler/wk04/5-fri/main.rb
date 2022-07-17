require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3' 
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Director < ActiveRecord::Base
end

class Film < ActiveRecord::Base
end


get '/' do
    erb :home
end

# INDEX 
get '/directors' do
    @directors = Director.all 
    erb :directors_index 
end

# NEW
get '/directors/new' do 
    erb :directors_new
end

# CREATE
post '/directors' do 
    director = Director.new 
    director.name = params[:name] 
    director.image = params[:image]
    director.save
    redirect to("/directors/#{ director.id }") # GET request
end

# SHOW
get '/directors/:id' do 
    @director = Director.find params[:id]
    erb :directors_show
end

# EDIT
get '/directors/:id/edit' do 
    @director = Director.find params[:id]
    erb :directors_edit
end

# UPDATE
post '/directors/:id' do 
    director = Director.find params[:id] 
    director.name = params[:name] 
    director.image = params[:image] 
    director.save 
    redirect to ("/directors/#{ params[:id] }")
end

# DELETE
get '/directors/:id/delete' do 
    director = Director.find params[:id]
    director.destroy
    redirect to('/directors')
end 


# MOVIES ######################################################################################################

# INDEX 
get '/films' do # (second url)
    @films = Film.all 
    erb :films_index 
end

# NEW
get '/films/new' do 
    erb :films_new
end


# CREATE
post '/films' do 
    film = Film.new 
    film.name = params[:name]
    film.description = params[:description]
    film.image = params[:image]
    film.save 
    redirect to ("/films")
end

# SHOW
get '/films/:id' do 
    @film = Film.find param[:id]
    erb :films_show
end

