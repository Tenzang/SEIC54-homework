require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

#model
class Ninja < ActiveRecord::Base
end

class Village < ActiveRecord::Base
end

get '/' do
    erb :home
end

#Index
get '/ninjas' do
    @ninjas = Ninja.all
    erb :ninjas_index
end

#New
get '/ninjas/new' do
    erb :ninjas_new
end

#Create - post
post '/ninjas' do
    ninja = Ninja.new
    ninja.name = params[:name]
    ninja.title = params[:title]
    ninja.image = params[:image]
    ninja.save
    redirect to("/ninjas")
end

#Show
get '/ninjas/:id' do
    @ninja = Ninja.find params[:id]
    erb :ninjas_show
end

#Edit
get '/ninjas/:id/edit' do
    @ninja = Ninja.find params[:id]
    erb :ninjas_edit
end


#Update - post
post '/ninjas/:id' do
    ninja = Ninja.find params[:id]
    ninja.name = params[:name]
    ninja.title = params[:title]
    ninja.image = params[:image]
    ninja.save
    redirect to("/ninjas/#{params[:id]}") 
end

#Delete
get '/ninjas/:id/delete' do
    ninja = Ninja.find params[:id]
    ninja.destroy
    redirect to("/ninjas")
end


##village

#Index
get '/villages' do
    @villages = Village.all
    erb :villages_index
end

#New
get '/villages/new' do
    erb :villages_new
end

#Create - post
post '/villages' do
    village = Village.new
    village.name = params[:name]
    village.image = params[:image]
    village.save
    redirect to("/villages")
end

#Show
get '/villages/:id' do
    @village = Village.find params[:id]
    erb :villages_show
end

#Edit
get '/village/:id/edit' do
    @village = Village.find params[:id]
    erb :villages_edit
end


#Update - post
post '/villages/:id' do
    village = Village.find params[:id]
    village.name = params[:name]
    village.image = params[:image]
    village.save
    redirect to("/villages/#{params[:id]}") 
end

#Delete
get '/village/:id/delete' do
    village = Village.find params[:id]
    village.destroy
    redirect to("/villages")
end

after do
    ActiveRecord::Base.connection.close #housekeeping
end
