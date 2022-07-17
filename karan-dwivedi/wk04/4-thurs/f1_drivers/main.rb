require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# HOME PAGE
get '/' do
    erb :home
end

# Page where all the drivers are listed. This page links to drivers_index erb and follows on to driver_show
get '/drivers' do
    @drivers = query_db 'SELECT * FROM drivers'
    erb :drivers_index
end

# NEW - Creating / adding a new driver + details. This will link to the driver_create page
get '/drivers/new' do 
    erb :drivers_new
end

#CREATE - You will use the /drivers page and post al your results from here to there. 
post '/drivers' do 
    query_db "INSERT INTO drivers (name, podiums, image) VALUES ('#{params[:name]}','#{params[:podiums]}','#{params[:image]}')"
    redirect to ('/drivers')
end

# Showing results / details on all the drivers
get '/drivers/:id' do 
    @driver = query_db "SELECT * FROM drivers WHERE id = #{params[:id]}"
    @driver = @driver.first
    erb :drivers_show
end

#EDITING
get '/drivers/:id/edit' do 
    @driver = query_db "SELECT * FROM drivers WHERE id = #{params[:id]}"
    @driver = @driver.first
    erb :drivers_edit
end

# UPDATE  -- Need more clarity on this one
post '/drivers/:id' do
    query_db "UPDATE drivers SET name ='#{ params[:name]}', podiums='#{ params[:podiums]}', image='#{ params[:image]}' WHERE id=#{ params[:id] }"
    redirect to("/drivers/#{params[:id]}")
end


get '/drivers/:id/delete' do
    query_db "DELETE FROM drivers WHERE id=#{ params[:id] }"
    redirect to('/drivers')
end


def query_db(sql_statement)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    results = db.execute sql_statement
    db.close
    results
end 