require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# INDEX
# Show all the countries
get '/countries' do
    @countries = query_db "SELECT * FROM countries"
    erb :countries_index
end

# NEW
# Blank form for a new country
get '/countries/new' do
    erb :countries_new
end

# CREATE
# Insert the user's form data into the database
post '/countries' do
    query_db "INSERT INTO countries (name, capital, population, map) VALUES ('#{ params[:name] }', '#{ params[:capital] }', '#{ params[:population] }', '#{ params[:map] }')"
    redirect to('/countries') # GET request
end

# SHOW
# Show a single country
get '/countries/:id' do
    @country = query_db "SELECT * FROM countries WHERE id=#{ params[:id] }"
    @country = @country.first # Pluck the single country from the array
    erb :countries_show
end

# EDIT
# Pre-filled form for updating a country
get '/countries/:id/edit' do
    @country = query_db "SELECT * FROM countries WHERE id=#{ params[:id] }"
    @country = @country.first
    erb :countries_edit
end

# UPDATE
# Update a country with the user's form data
post '/countries/:id' do
    query_db "UPDATE countries SET name='#{ params[:name] }', capital='#{ params[:capital] }', population='#{ params[:population] }', map='#{ params[:map] }' WHERE id=#{ params[:id] }"
    redirect to("/countries/#{ params[:id] }") # GET request
end

# DESTROY
# Delete a country from the database
get '/countries/:id/delete' do
    query_db "DELETE FROM countries WHERE id=#{ params[:id] }"
    redirect to('/countries')
end

def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results # implicit return
end

