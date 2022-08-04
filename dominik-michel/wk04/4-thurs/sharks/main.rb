require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    
    erb :home
end

#INDEX
get '/sharks' do
@sharks = query_db 'SELECT * FROM sharks'
erb :sharks_index
end

#NEW
get '/sharks/new' do
    erb :sharks_new
end

# #CREATE
post '/sharks' do
    query_db "INSERT INTO sharks (name,family,region,image) VALUES ('#{params[:name]}','#{params[:family]}','#{params[:region]}','#{params[:image]}')"
    redirect to('/sharks')
end


# #SHOW
get '/sharks/:id' do
    @shark = query_db "SELECT * FROM sharks WHERE id=#{params[:id]}"
    @shark= @shark.first
    erb :sharks_show
end


# #EDIT
get '/sharks/:id/edit' do
    @shark= query_db "SELECT * FROM sharks WHERE id=#{params[:id]}"
    @shark= @shark.first
    erb :sharks_edit
end

# #UPDATE

post '/sharks/:id' do
    query_db "UPDATE sharks SET name='#{params[:name]}', family='#{params[:family]}', region='#{params[:region]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
    redirect to("sharks/#{params[:id]}")
end

# #DESTROY
get '/sharks/:id/delete' do
    query_db "DELETE FROM sharks WHERE id=#{params[:id]}"
    redirect to('/sharks')
end

#create function
def query_db(sql_statement)
    puts sql_statement
    db= SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash =true
    result = db.execute sql_statement
    db.close
    result
end







