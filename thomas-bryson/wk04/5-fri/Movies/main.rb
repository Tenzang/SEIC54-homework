require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Create MODEL - A class backed by a database
# For some reason these MUST be in capitals
class Movie < ActiveRecord::Base
end

class Director < ActiveRecord::Base
end


# Telling the Database to fetch the homepage
get '/' do
    erb :home
end

# NEW
# Input a new film
get '/movies/new' do
    erb :movies_new
end

# INDEX
# Show all movies from the database
get '/movies' do
    @movies = Movie.all  
    erb :movies_index
end

# Create
post '/movies' do
    movie = Movie.new
    movie.title = params[:title]
    movie.director = params[:director]
    movie.image = params[:image]
    movie.save
    redirect to("/movies/#{ movie.id }") # GET request to SHOW
end

# SHOW/FIND
# For finding and showing a movie from the database
get '/movies/:id' do
    @movie = Movie.find params[:id]
    erb :movies_show
end

# Edit
# To Edit a Film
get '/movies/:id/edit' do
    @movie = Movie.find params[:id]
    erb :movies_edit
end

# Update
post '/movies/:id' do
    movie = Movie.find params[:id]
    movie.title = params[:title]
    movie.director = params[:director]
    movie.image = params[:image]
    movie.save
    redirect to("/movies/#{ params[:id] }") # GET request
end

# Destroy
get '/movies/:id/delete' do
    movie = Movie.find params[:id]
    movie.destroy
    redirect to('/movies')
end