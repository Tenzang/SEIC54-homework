require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end

#index
get '/jojo' do
    @jojo = query_db "SELECT * FROM jojo"
    erb :jojo_index
end
#create
post '/jojo' do
    query_db "INSERT INTO jojo (first_name, last_name, image) VALUES ('#{params[:first_name]}', '#{params[:last_name]}', '#{params[:url]}')"
    redirect to('/jojo')
end

#new
get '/jojo/new' do
    erb :jojo_new
end

#show
get '/jojo/:id' do
    @jojo = query_db "SELECT * FROM jojo WHERE id=#{params[:id]}"
    @jojo = @jojo.first
    erb :jojo_show
end

#edit
get '/jojo/:id/edit' do
    @jojo = query_db "SELECT * FROM jojo WHERE id=#{;params[:id]}"
    @jojo = @jojo.first
    erb :jojo_edit
end

#update
post '/jojo/:id' do
    query_db "UPDATE jojo SET first_name='#{params[:first_name]}', last_name='#{params[:last_name]}', image='#{params[:url]}' WHERE id=#{params[:id]}"
    redirect to("jojo/#{params[:id]}")
end

#delete
get 'jojo/:id/delete' do
    query_db "DELETE FROM jojo WHERE id=#{params[:id]}"
    redirect to("/jojo")
end

#sql function
def query_db (sql_statement) 
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end