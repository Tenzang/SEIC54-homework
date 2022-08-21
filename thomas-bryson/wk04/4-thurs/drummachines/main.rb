require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    puts "hello"
    erb :home
end

# INDEX
get '/drummachines' do
    @drummachines = query_db 'SELECT * FROM drummachines'
    erb :drummachines_index
end

# CREATE
post '/drummachines' do
    query_db "INSERT INTO drummachines (model, brand, image) VALUES ('#{ params[:model] }', '#{ params[:brand] }
    ', '#{ params[:image] }')";
    redirect to('/drummachines') # GET request
end

# SHOW
get '/drummachines/:id' do
    @drummachine = query_db "SELECT * FROM drummachines WHERE id=#{ params[:id] }"
    @drummachine = @drummachine.first
    erb :drummachines_show
end

# NEW
get '/drummachines/new' do
    erb :drummachines_new
end

# EDIT
get '/drummachines/:id/edit' do
    @drummachine = query_db "SELECT * FROM drummachines WHERE id=#{ params[:id] }"
    @drummachine = @drummachine.first
    erb :drummachines_edit
end

# UPDATE
post '/drummachines/:id' do
    query_db "UPDATE drummachines SET model='#{ params [:model] }', brand='#{ params[:brand] }', image='#{ params[image] }', WHERE id=#{ params[:id] }"
    redirect to("/drummachines/#{ params[:id] }") #  GET request
end

# DESTROY
    get '/drummachines/:id/delete' do
        query_db "DELETE FROM drummachines WHERE id=#{ params[:id] }"
        redirect to('/drummachines')
    end


def query_db(sql_statement)
    puts sql_statement # optional but nice for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end