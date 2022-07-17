require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

# Index

get '/coolbirds' do
@coolbirds = query_db 'SELECT * FROM cool_birds'
erb :coolbirds_index  
end

# Create 

# This has to go above '/coolbirds/:id'
get '/coolbirds/new' do
erb :coolbirds_new
end

post '/coolbirds' do
query_db "INSERT INTO cool_birds (name, reason, coolness, image) VALUES ('#{ params[:name] }','#{ params[:reason] }','#{ params[:coolness] }','#{ params[:image] }')"
redirect to ("/coolbirds")
end

# Show
get '/coolbirds/:id' do
@coolbird = query_db "SELECT * FROM cool_birds WHERE id=#{ params[:id] }"
@coolbird = @coolbird.first
erb :coolbirds_show
end

get '/coolbirds/:id/edit' do
    @coolbird = query_db "SELECT * FROM cool_birds WHERE id=#{ params[:id] }"
    @coolbird = @coolbird.first
    erb :coolbirds_edit
end

post '/coolbirds/:id' do
query_db "UPDATE cool_birds SET name='#{params[:name] }', reason='#{ params[:reason] }', coolness='#{ params[:coolness] }', image='#{ params[:image] }', WHERE id=#{ params[:id] }"
redirect to ("/coolbirds/#{ params[:id] }")
end

get '/coolbirds/:id/delete' do
    query_db "DELETE FROM cool_birds WHERE id=#{ params[:id] }"
    redirect to('/coolbirds')
end

def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close 
    results
end