require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Pokemon < ActiveRecord::Base
    self.table_name = "pokemon"
end

get '/' do
    erb :home
end

# INDEX
get '/pokemon' do
    @pokemon = Pokemon.all
    erb :pokemon_index
end

# NEW
get '/pokemon/new' do
    erb :pokemon_new
end

# CREATE
post '/pokemon' do
    pokemon = Pokemon.new
    pokemon.name = params[:name]
    pokemon.types = params[:types]
    pokemon.image = params[:image]
    pokemon.save
    redirect to("/pokemon/#{ pokemon.id }")
end

# SHOW
get '/pokemon/:id' do
    @pokemon = Pokemon.find params[:id]
    erb :pokemon_show
end

# EDIT
get '/pokemon/:id/edit' do
    @pokemon = Pokemon.find params[:id]
    erb :pokemon_edit
end

# UPDATE
post '/pokemon/:id' do
    pokemon = Pokemon.find params[:id]
    pokemon.name = params[:name]
    pokemon.types = params[:types]
    pokemon.image = params[:image]
    pokemon.save
    redirect to("/pokemon/#{ params[:id] }")
end

# DESTORY
get '/pokemon/:id/delete' do
    pokemon = Pokemon.find params[:id]
    pokemon.destroy
    redirect to('/pokemon')
end