require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)

class Star < ActiveRecord::Base
end
class Planet < ActiveRecord::Base
end
############################################################
get '/' do
    erb :home
end

#INDEX
get '/stars' do
    @stars = Star.all
    erb :stars_index
end

#NEW 
get '/stars/new' do
    erb :stars_new
end

#CREATE 
post '/stars' do
    star = Star.new 
    star.name = params[:name]
    star.constellation = params[:constellation]
    star.coordinates = params[:coordinates]
    star.distance = params[:distance]
    star.stellar_class = params[:stellar_class]
    star.mass = params[:mass]
    star.planets = params[:planets]
    star.funfact = params[:funfact]
    star.image = params[:image]
    star.save
    redirect to("/stars/#{ star.id }")
end

#SHOW
get '/stars/:id' do
    @star = Star.find params[:id]
    erb :stars_show
end

#EDIT
get '/stars/:id/edit' do
    @star = Star.find params[:id]
    erb :stars_edit
end

#UPDATE
post '/stars/:id' do
    star = Star.find params[:id]
    star.name = params[:name]
    star.constellation = params[:constellation]
    star.coordinates = params[:coordinates]
    star.distance = params[:distance]
    star.stellar_class = params[:stellar_class]
    star.mass = params[:mass]
    star.planets = params[:planets]
    star.funfact = params[:funfact]
    star.image = params[:image]
    star.save
    redirect to("/stars/#{ star.id }")
end

#DELETE
get '/stars/:id/delete' do
    star = Star.find params[:id]
    star.destroy
    redirect to('/stars')
end

############################################################
#PLANETS CRUD
#INDEX
get '/planets' do
    @planets = Planet.all
    erb :planets_index
end

#NEW 
get '/planets/new' do
    erb :planets_new
end

#CREATE 
post '/planets' do
    planet = Planet.new 
    planet.name = params[:name]
    planet.habitable = params[:habitable]
    planet.star = params[:star]
    planet.mass = params[:mass]
    planet.temp = params[:temp]
    planet.period = params[:period]
    planet.distance = params[:distance]
    planet.funfact = params[:funfact]
    planet.image = params[:image]
    planet.save
    redirect to("/planets/#{ planet.id }")
end

#SHOW
get '/planets/:id' do
    @planet = Planet.find params[:id]
    erb :planets_show
end

#EDIT
get '/planets/:id/edit' do
    @planet = Planet.find params[:id]
    erb :planets_edit
end

#UPDATE
post '/planets/:id' do
    planet = Planet.find params[:id]
    planet.name = params[:name]
    planet.habitable = params[:habitable]
    planet.star = params[:star]
    planet.mass = params[:mass]
    planet.temp = params[:temp]
    planet.period = params[:period]
    planet.distance = params[:distance]
    planet.funfact = params[:funfact]
    planet.image = params[:image]
    planet.save
    redirect to("/planets/#{ planet.id }")
end

#DELETE
get '/planets/:id/delete' do
    planet = Planet.find params[:id]
    planet.destroy
    redirect to('/planets')
end

after do
    ActiveRecord::Base.connection.close
end