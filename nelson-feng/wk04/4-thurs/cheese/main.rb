require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get "/" do #home page --> home erb
    erb :home
end


get '/cheese' do  # Page shows all cheeses listed #index
    @cheese = query_db "SELECT * FROM cheese" #no need for semi colon as ruby does it for you
    erb :cheese_index
end

get '/cheese_new' do # page for submitting new cheeses #new
    erb :cheese_new
end

post '/cheese' do #Makes new cheese by using SQL to insert into the table cheese w values as the variables
    query_db "INSERT INTO cheese (name, region, blurb, image) VALUES ('#{params["name"]}', '#{params["region"]}','#{params["blurb"]}','#{params["image"]}')"
    redirect to('/cheese') #redirects the cheese index so user can see the update
end

get '/cheese/:id' do # Pages shows more info on the cheese #show
    @cheese = query_db "SELECT * FROM cheese WHERE id=#{ params[:id] }" #when press link on cheese_index.erb it activates this get statement.
    @cheese = @cheese.first #@cheese comes out as an array, need to grab it out of an array
    erb :cheese_show
end

get '/cheese/:id/edit' do #edit
    @cheese = query_db "SELECT * FROM cheese WHERE id=#{ params[:id] }"
    @cheese = @cheese.first 
    erb :cheese_edit
end

post '/cheese/:id' do #update
    query_db "UPDATE cheese SET name='#{ params[:name] }', region='#{ params[:region] }', blurb='#{ params[:blurb] }', image='#{ params[:image] }' WHERE id='#{ params[:id] }'"
    redirect to ("/cheese/#{params[:id]}")
end

get '/cheese/:id/delete' do #DELETE
    query_db "DELETE FROM cheese WHERE id='#{params[:id]}'"
    redirect to ('/cheese')
end













def query_db(sql_statement) #function used to establish connection with SQL, lets ruby talk make commands to SQL
    puts sql_statement # for debugging
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true # sets db as hash for easier manipulation
    results = db.execute sql_statement #execute SQL command
    db.close # closed connection
    results #implicit return
end