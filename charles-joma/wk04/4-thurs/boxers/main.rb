require "sinatra"
require "sinatra/reloader"
require "sqlite3"


get '/' do 
    erb :home
end

# INDEX

get '/boxers' do 
    @boxers = query_db 'SELECT * FROM boxers'
    erb :boxers_index
end

# UPDATE

post '/boxers/:id' do
    "UPDATE boxers SET name='#{ params[:name]}', weight_division='#{ params[:weight_division]}', image='#{:image}' WHERE id=#{ params[:id]}"
    redirect to("/boxers/#{ params[:id]}")
end

# DELETE

get '/boxers/:id/delete' do 
    query_db "DELETE FROM boxers WHERE id=#{ params[:id] }"
    redirect to("/boxers")
end


# NEW
get '/boxers/new' do 
    erb :boxers_new
end

# CREATE 

post '/boxers' do 
    query_db "INSERT INTO boxers (name, weight_division, image) VALUES ('#{ params[:name]}', '#{ params[:weight_division]}','#{ params[:image]}')";
    redirect to('/boxers') 
end



# SHOW

get '/boxers/:id' do 
    @boxers = query_db "SELECT * FROM boxers WHERE id=#{ params[:id]}"
    @boxers = @boxers.first
    erb :boxers_show
end

# EDIT 
get '/boxers/:id/edit' do
    @boxers = query_db "SELECT * FROM boxers WHERE id=#{ params[:id]}"
    @boxers = @boxers.first
    erb :boxers_edit
end


def query_db(sql_statement)
    db = SQLite3::Database.new 'database.sqlite3'
    #This turns results into a hash making it easier to deal with in ruby
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end
