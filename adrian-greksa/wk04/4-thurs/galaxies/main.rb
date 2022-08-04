require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# HOME
get '/' do
    erb :home
end

# INDEX
get '/rubble' do
    db = SQLite3::Database.new ("database.sqlite3")
    db.results_as_hash = true
    @galaxies = db.execute 'SELECT * FROM galaxies'
    db.close

    erb :galaxies_all
end

# NEW
get '/galaxy/new' do
    erb :galaxy_new
end

# CREATE
post '/rubble' do
    query_db "INSERT INTO galaxies (name, othernames, constellation, distance, coordinates, funfact, image) VALUES ('#{ params[:name] }', '#{ params[:othernames] }', '#{ params[:constellation] }', '#{ params[:distance] }', '#{ params[:coordinates] }', '#{ params[:funfact] }', '#{ params[:image] }')"
    redirect to('/rubble')
end

# SHOW
get '/galaxy/:id' do
    @galaxy = query_db "SELECT * FROM galaxies WHERE id=#{ params[:id] }"
    @galaxy = @galaxy.first 
    erb :galaxy_show
end

# EDIT
get '/galaxy/:id/edit' do
    @galaxy = query_db "SELECT * FROM galaxies WHERE id=#{ params[:id] }"
    @galaxy = @galaxy.first
    erb :galaxy_edit
end

# UPDATE
post '/galaxy/:id' do
    query_db "UPDATE galaxies SET name='#{ params[:name] }', othernames='#{ params[:othernames] }', constellation='#{ params[:constellation] }', distance='#{ params[:distance] }', coordinates='#{ params[:coordinates] }', funfact='#{ params[:funfact] }', image='#{ params[:image] }' WHERE id='#{ params[:id] }'"
    redirect to( "/galaxy/#{ params[:id] }" ) 
end

# DESTROY
get '/galaxy/:id/delete' do
    query_db "DELETE FROM galaxies WHERE id='#{ params[:id] }'"
    redirect to('/rubble')
end

################################################################
def query_db sql_statement

    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results

end