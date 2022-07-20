require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

get '/' do
    erb :home
end

ActiveRecord::Base.establish_connection(
    :adapter =>'sqlite3',
    :database =>'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Podcast < ActiveRecord::Base 
end

class Host < ActiveRecord::Base
end

#INDEX

get '/podcasts' do
@podcasts = Podcast.all
erb :podcasts_index
end

#NEW

get '/podcasts/new' do
    erb :podcasts_new
end

#CREATE

post '/podcasts' do
    podcast = Podcast.new
    podcast.host = params[:host]
    podcast.guest = params[:guest]
    podcast.theme = params[:theme]
    podcast.link = params[:link]
    podcast.save
    redirect to("/podcasts/#{podcast.id}")
end

#SHOW

get '/podcasts/:id' do
    @podcast = Podcast.find params[:id]
    erb :podcasts_show
end

#EDIT
get '/podcasts/:id/edit' do
    @podcast = Podcast.find params[:id]
    erb :podcasts_edit
end

#UPDATE
post '/podcasts/:id' do
    podcast = Podcast.find params[:id]
    podcast.host = params[:host]
    podcast.guest = params[:guest]
    podcast.theme = params[:theme]
    podcast.link = params[:link]
    podcast.save
    redirect to("/podcasts/#{podcast.id}")
end

#DELETE

get '/podcasts/:id/delete' do
podcast=Podcast.find params[:id]
podcast.destroy
redirect to('/podcasts')
end
##########################################################################
#INDEX


get '/hosts' do
    @hosts = Host.all
    erb :hosts_index
    end
    
    #NEW
    
    get '/hosts/new' do
        erb :hosts_new
    end
    
    #CREATE
    
    post '/hosts' do
        host = Host.new
        host.name = params[:name]
        host.podcast = params[:podcast]
        host.save
        redirect to("/hosts/#{host.id}")
    end
    
    #SHOW
    
    get '/hosts/:id' do
        @host = Host.find params[:id]
        erb :hosts_show
    end
    
    #EDIT
    get '/hosts/:id/edit' do
        @host = Host.find params[:id]
        erb :hosts_edit
    end
    
    #UPDATE
    post '/hosts/:id' do
        podcast = Host.find params[:id]
        podcast.name = params[:name]
        podcast.podcast = params[:podcast]
        podcast.save
        redirect to("/hosts/#{podcast.id}")
    end
    
    #DELETE
    
    get '/hosts/:id/delete' do
    host=Host.find params[:id]
    host.destroy
    redirect to('/hosts')
    end