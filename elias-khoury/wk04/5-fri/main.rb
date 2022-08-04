require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Chili < ActiveRecord::Base
    self.table_name = "chilies"
end

class Country < ActiveRecord::Base
end

# ____________________________________________

get '/' do
    erb :home
end

get '/chilies' do
    @chilies = Chili.all
    erb :chilies_index
end



get '/chilies/create' do
    erb :chilies_create
end

post '/chilies' do
    chili = Chili.new
    chili.name = params[:name]
    chili.rating = params[:rating]
    chili.image = params[:image]
    chili.video = params[:video]
    chili.save
    redirect to("/chilies/#{chili.id}")
end

post '/chilies/:id' do
    chili = Chili.find params[:id]
    chili.name = params[:name]
    chili.rating = params[:rating]
    chili.image = params[:image]
    chili.video = params[:video]
    chili.save
    redirect to("/chilies/#{chili.id}")
end

get '/chilies/:id/edit' do
    @chili = Chili.find params[:id]
    erb :chilies_edit
end


get '/chilies/:id' do
    @chili = Chili.find params[:id]
    erb :chilies_show
end

get '/chilies/:id/delete' do
    chili = Chili.find params[:id]
    chili.destroy
    redirect to('/chilies')
end

# ________________________________________


get '/countries' do
    @countries = Country.all
    erb :countries_index
end

get '/countries/create' do
    erb :countries_create
end

post '/countries' do
    country = Country.new
    country.name = params[:name]
    country.population = params[:population]
    country.capital = params[:capital]
    country.save
    redirect to('/countries')
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
    country.population = params[:population]
    country.capital = params[:capital]
    country.save
    redirect to("countries/#{params[:id]}")
end

get '/countries/:id/delete' do
    country = Country.find params[:id]
    country.destroy
    redirect to('/countries')
end





after do
    ActiveRecord::Base.connection.close #housekeeping
end


def stringing(input)
    $num_groups = input.to_s.chars.to_a.reverse.each_slice(3)
    $num_groups.map(&:join).join(',').reverse
end