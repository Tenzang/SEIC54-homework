require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    erb :home
end


get '/artists' do
    @artists = query_db "SELECT * FROM artists"
    erb :artists_index
end

get '/artists/create' do
    erb :artists_create
end

#create
post '/artists' do
    query_db "INSERT INTO artists (name, genre, spotify) VALUES ('#{params[:name]}', '#{params[:genre]}', '#{params[:spotify]}')"
    redirect to("/artists")
end


get '/artist/:id' do
    @artist = query_db("SELECT * FROM artists WHERE id=#{params[:id]}").first
    erb :artist_page
end

#EDIT
get '/artist/:id/edit' do
    @artist = query_db("SELECT * FROM artists WHERE id=#{params[:id]}").first
    erb :artist_edit
end

post '/artists/:id' do
    query_db "UPDATE artists SET name='#{params[:name]}', genre='#{ params[:genre]}', spotify='#{params[:spotify]}' WHERE id=#{params[:id]}"
    redirect to("/artist/#{params[:id]}")
end

#DESTROY
get '/artist/:id/delete' do
    query_db "DELETE FROM artists WHERE id=#{params[:id]}"
    redirect to('/artists')
end


def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end