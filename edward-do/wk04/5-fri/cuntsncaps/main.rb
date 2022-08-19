require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Country < ActiveRecord::Base
end

class Capital < ActiveRecord::Base
end

get '/' do
    erb :home
end

get '/countries' do
    @countries = Country.all
    erb :countries_index
end

get '/countries/new' do
    erb :countries_new
end

post '/countries' do
    country = Country.new
    country.name = params[:name]
    country.capital = params[:capital]
    country.population = params[:population]
    country.banner = params[:banner]
    country.map = params[:map]
    country.flag = params[:flag]
    country.save
    redirect to("/countries/#{ country.id }")
end

get '/countries/:id' do
    @country = Country.find params[:id]
    erb :countries_show
end

get '/countries/:id/edit' do
    @country = Country.find params[:id]
    erb :countries_edit
end

post '/countries/:id' do
    country = Country.find params[:id]
    country.name = params[:name]
    country.capital = params[:capital]
    country.population = params[:population]
    country.banner = params[:banner]
    country.map = params[:map]
    country.flag = params[:flag]
    country.save 
    redirect to("/countries/#{ params[:id] }")
end

get '/countries/:id/delete' do
    country = Country.find params[:id]
    country.destroy
    redirect to('/countries')
end

# Capitals

get '/capitals' do
    @capitals = Capital.all
    erb :capitals_index
end

get '/capitals/new' do
    erb :capitals_new
end

post '/capitals' do
    capital = Capital.new
    capital.name = params[:name]
    capital.population = params[:population]
    capital.skyline = params[:skyline]    
    capital.save    
    redirect to("/capitals/#{ capital.id }")
end

get '/capitals/:id' do
    @capital = Capital.find params[:id]
    erb :capitals_show
end

get '/capitals/:id/edit' do
    @capital = Capital.find params[:id]
    erb :capitals_edit
end

post '/capitals/:id' do
    capital = Capital.find params[:id]
    capital.name = params[:name]
    capital.population = params[:population]
    capital.skyline = params[:skyline]
    capital.save
    redirect to("/capitals/#{ capital.id }")
end

get '/capitals/:id/delete' do
    capital = Capital.find params[:id]
    capital.destroy
    redirect to('/capitals')
end

after do
    ActiveRecord::Base.connection.close
end