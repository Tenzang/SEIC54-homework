require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home
end

# INDEX:
get '/cars' do 
    @cars = query_db "SELECT * FROM cars"
    erb :cars_index
end

# NEW
get '/cars/new' do 
    erb :cars_new
end

# CREATE
post '/cars' do # called HTTP methods  
    query_db "INSERT INTO cars (make, model, image) VALUES ('#{ params[:make] }', '#{ params[:model] }', '#{ params[:image] }')"
    redirect to('/cars') # GET request
end

# SHOW
get '/cars/:id' do 
    # connect to the database
    @car = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }"

    @car = @car.first # Gonna pluck the single car fromm the array
    erb :cars_show

end

# eDIT
get '/cars/:id/edit' do 
    @car = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }"
    @car = @car.first
    erb :cars_edit

end

# UPDATE
post '/cars/:id' do 
    query_db "UPDATE cars SET make='#{ params[:make] }', model='#{ params[:model]}' , image='#{ params[:image] }' WHERE id=#{ params[:id] } "
    redirect to ("/cars?/#{ params[:id] }")
end


# DELETE
get '/cars/:id/delete' do 
    query_db "DELETE FROM cars WHERE id =#{ params[:id] }"
    redirect to ('/cars')
end





def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close 
    results # implicit return
end
