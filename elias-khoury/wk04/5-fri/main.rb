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






after do
    ActiveRecord::Base.connection.close #housekeeping
end