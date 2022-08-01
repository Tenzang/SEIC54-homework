require "sinatra"
require "sinatra/reloader"
require "active_record" # Uses sqlite3 - would this mean I will need sqlite 3 installed?

# Creates a connection via Activerecord to database
ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)
# To log the SQL command made after every action to the database
ActiveRecord::Base.logger = Logger.new(STDERR)

#models
class Country < ActiveRecord::Base
end

class Dish < ActiveRecord::Base
end

get '/' do
    erb :home
end

# I N D E X - Country
get '/countries' do
    @countries = Country.all
    erb :countries_index
end

# N E W - Country
get '/countries/new' do
    erb :countries_new
end

# C R E A T E - Country
post '/countries' do
    country = Country.new
    country.name = params[:name]
    country.continent = params[:continent]
    country.info = params[:info]
    country.image = params[:image]
    country.save
    redirect to("/countries/#{country.id}")
end


# S H O W - Country
get '/countries/:id' do
    @countries = Country.find params[:id] #???
    erb :countries_show
end

# E D I T - Country
get '/countries/:id/edit' do
    @countries = Country.find params[:id]
    erb :countries_edit
end

# U P D A T E - Country

post '/countries/:id' do
    country = Country.find params[:id]
    country.name = params[:name]
    country.continent = params[:continent]
    country.info = params[:info]
    country.image = params[:image]
    country.save
    redirect to("/countries/#{ country.id }")
end

# D E S T R O Y - Country
get '/countries/:id/delete' do
    country = Country.find params[:id]
    country.destroy
    redirect to("/countries")
end


#-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

# I N D E X - Dishes
get '/dishes' do
    @dishes = Dish.all
    erb :dishes_index
end

# N E W - Dishes
get '/dishes/new' do
    erb :dishes_new
end

# C R E A T E - Dishes
post '/dishes' do
    dish = Dish.new
    dish.name = params[:name]
    dish.info = params[:info]
    dish.image = params[:image]
    dish.save
    redirect to("/dishes/#{dish.id}")
end


# S H O W - Dishes
get '/dishes/:id' do
    @dishes = Dish.find params[:id] #???
    erb :dishes_show
end

# E D I T - Dishes
get '/dishes/:id/edit' do
    @dishes = Dish.find params[:id]
    erb :dishes_edit
end

# U P D A T E - Dishes

post '/dishes/:id' do
    dish = Dish.find params[:id]
    dish.name = params[:name]
    dish.info = params[:info]
    dish.image = params[:image]
    dish.save
    redirect to("/dishes/#{ dish.id }")
end

# D E S T R O Y - Dishes
get '/dishes/:id/delete' do
    dish = Dish.find params[:id]
    dish.destroy
    redirect to("/dishes")
end





