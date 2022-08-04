require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Move < ActiveRecord::Base
end

class Pokemon < ActiveRecord::Base
end

# class Elite_Four < ActiveRecord
#     has_many :pokemon
# end

# class CreateEliteFour < ActiveRecord::Migration[5.0]
#     def change
#         create_table :elitefours do |t|
#             t.

#         end

#         create_table :pokemons do |t|
        

#         end
# end

get '/' do
    erb :home
end

# INDEX
get '/moves' do
    @moves = Move.all
    erb :moves_index
end

# NEW
get '/moves/new' do
    erb :moves_new
end

# Create
post '/moves' do
   move = Move.new
   move.name = params[:name]
   move.element = params[:element]
   move.strength = params[:strength]
   move.accuracy = params[:accuracy]
   move.pp = params[:pp]
   move.description = params[:description]
   move.save
   redirect to("/moves/#{ move.id }") # GET request to SHOW 
end

# SHOW
get '/moves/:id' do
    @move = Move.find params[:id]
    erb :moves_show
end

# EDIT
get '/moves/:id/edit' do
    @move = Move.find params[:id]
    erb :moves_edit
end

# UPDATE
post '/moves/:id' do
    move = Move.find params[:id]
    move.name = params[:name]
    move.element = params[:element]
    move.strength = params[:strength]
    move.accuracy = params[:accuracy]
    move.pp = params[:pp]
    move.description = params[:description]
    move.save
    redirect to("/moves/#{ params[:id] }")
end

# DESTROY
get '/moves/:id/delete' do
    move = Move.find params[:id]
    move.destroy
    redirect to('/moves')
end

get '/pokemons' do
    @pokemons = Pokemon.all
    erb :pokemons_index
end

# NEW
get '/pokemons/new' do
    erb :pokemons_new
end

# Create
post '/pokemons' do
   pokemon = Pokemon.new
   pokemon.name = params[:name]
   pokemon.types = params[:types]
   pokemon.image = params[:image]
   pokemon.level = params[:level]
   pokemon.HP = params[:HP]
   pokemon.Attack = params[:Attack]
   pokemon.Defense = params[:Defense]
   pokemon.Special = params[:Special]
   pokemon.Speed = params[:Speed]
   pokemon.save
   redirect to("/pokemons/#{ pokemon.id }") # GET request to SHOW 
end

# SHOW
get '/pokemons/:id' do
    @pokemon = Pokemon.find params[:id]
    erb :pokemons_show
end

# EDIT
get '/pokemons/:id/edit' do
    @pokemon = Pokemon.find params[:id]
    erb :pokemons_edit
end

# UPDATE
post '/pokemons/:id' do
    pokemon = Pokemon.find params[:id]
    pokemon.name = params[:name]
    pokemon.types = params[:types]
    pokemon.image = params[:image]
    pokemon.level = params[:level]
    pokemon.HP = params[:HP]
    pokemon.Attack = params[:Attack]
    pokemon.Defense = params[:Defense]
    pokemon.Special = params[:Special]
    pokemon.Speed = params[:Speed]
    pokemon.save
    redirect to("/pokemons/#{ pokemon.id }")
end

# DESTROY
get '/pokemons/:id/delete' do
    pokemon = Pokemon.find params[:id]
    pokemon.destroy
    redirect to('/pokemons')
end

# Connection close
after do
    ActiveRecord::Base.connection.close
end