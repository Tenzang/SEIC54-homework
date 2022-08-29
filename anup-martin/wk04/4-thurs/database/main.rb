require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def query_db sql_statement
    puts sql_statement
    db = SQLite3::Database.new "groceries.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end

# #create
get '/new' do
    erb :home
end

get '/' do
    "Hello World"
  end

# INDEX
# Show all the shopping_carts
get '/shopping_carts' do
    @shopping_carts = query_db "SELECT * FROM shopping_carts"
    erb :shopping_carts_index
end

# NEW
# Blank form for a new country
get '/shopping_carts/new' do
    erb :shopping_carts_new
end

# CREATE
# Insert the user's form data into the database
post '/shopping_carts' do
    query_db "INSERT INTO shopping_carts (name, rate) VALUES ('#{ params[:name] }', '#{ params[:rate] }')"
    redirect to('/shopping_carts') # GET request
end

# SHOW
# Show a single item
get '/shopping_carts/:id' do
    @grocery_item = query_db "SELECT * FROM shopping_carts WHERE id=#{ params[:id] }"
    @grocery_item = @grocery.first # Pluck the single grocery_item from the array
    erb :shopping_carts_show
end


# SHOW
# Show a single country
get '/shopping_carts/:id' do
    @grocery_item = query_db "SELECT * FROM shopping_carts WHERE id=#{ params[:id] }"
    @grocery_item = @grocery.first # Pluck the single country from the array
    erb :grocery_show
end

# EDIT
# Pre-filled form for updating a country
get '/shopping_carts/:id/edit' do
    @grocery_item = query_db "SELECT * FROM shopping_carts WHERE id=#{ params[:id] }"
    @grocery_item = @country.first
    erb :grocery_edit
end

# UPDATE
# Update a grocery item with the user's form data
post '/grocery/:id' do
    query_db "UPDATE grocery SET name='#{ params[:name] }', rate='#{ params[:rate] }', WHERE id=#{ params[:id] }"
    redirect to("/grocery/#{ params[:id] }") # GET request
end

# DESTROY
# Delete a grocery from the database
get '/grocery/:id/delete' do
    query_db "DELETE FROM grocery WHERE id=#{ params[:id] }"
    redirect to('/grocery')
end






