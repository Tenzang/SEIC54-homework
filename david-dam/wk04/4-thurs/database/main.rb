require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
    erb :home
end

#index
get '/people' do
    @people = query_db "SELECT * FROM people"
    erb :people_index
end

#new
get '/people/new' do
    erb :people_new
end

#create
post '/people' do
    query_db "INSERT INTO people (name, world, image) VALUES ('#{ params[:name]}','#{ params[:world]}','#{ params[:image]}')"
    redirect to('/people') #GET request
end

#show
get '/people/:id' do
    @person = query_db "SELECT * FROM people WHERE id=#{ params["id"] }"
    @person = @person.first
    erb :people_show
end

get '/people/:id/edit' do
    @person = query_db "SELECT * FROM people WHERE id=#{ params["id"] }"
    @person = @person.first
    erb :people_edit
end



def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new "database.sqlite3"
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close 
    results 
end