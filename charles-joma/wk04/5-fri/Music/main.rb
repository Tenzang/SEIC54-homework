require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
);

ActiveRecord::Base.logger = Logger.new(STDERR);

class Artist < ActiveRecord::Base 
end

class Album < ActiveRecord::Base
end

get '/' do 
    erb :home
end

get '/artists' do 
    @artists = Artist.all 
    erb :artists_index
end

# New Artist , takes to you to the create artist page
get '/artists/new' do 
    erb :artists_new
end

# CREATE , This is the actions and what happens when creating the new artists
post '/artists' do 
    artist = Artist.new 
    artist.name = params[:name]
    artist.label = params[:label]
    artist.image = params[:image]
    artist.save
    redirect to("/artists/#{ artist.id }")
end

# SHOW THE NEWLY CREATED ARTIST
get '/artists/:id' do 
    @artist = Artist.find params[:id]
    erb :artists_show
end 

# EDIT , allow for clicking the edit anchor tag and takes you to your edit page

get '/artists/:id/edit' do 
    @artist = Artist.find params[:id]
    erb :artists_edit
end

# UPDATE, pushes the updated info and takes you back to the artists page

post '/artists/:id' do
    artist = Artist.find params[:id]
    artist.name = params[:name]
    artist.label = params[:label]
    artist.image = params[:image]
    artist.save
    redirect to("/artists/#{artist.id}")
end

# DELETE, this is for deleting an artist from the database
get '/artists/:id/delete' do
    artist = Artist.find params[:id]
    artist.destroy
    redirect to('/artists')
end





#============A L B U M S=============#

# This creates the link to the albums index page when the link is clicked
get '/albums' do 
    @albums = Album.all 
    erb :albums_index
end

#binding.irb

get '/albums/new' do 
    erb :albums_new                              
end

post '/albums' do 
    album = Album.new
    album.name = params[:name]
    album.author = params[:author]
    album.streams = params[:streams]
    album.image = params[:image]
    album.save
    redirect to("/albums/#{ album.id }")
end 

get '/albums/:id' do
    @albums = Album.find params[:id]
    binding.irb
    erb :albums_show
end

get '/albums/:id/edit' do 
    @albums = Album.find params[:id]
    erb :albums_edit
end

post '/albums/:id' do 
    album = Album.find params[:id]
    album.name = params[:name]
    album.author = params[:author]
    album.save
    redirect to("/albums/#{album.id}")
end

get '/albums/:id/delete' do 
    album = Artist.find params[:id]
    album.destroy
    redirect to("/albums")
end

after do
    ActiveRecord::Base.connection.close
end


# C
# R
# U
# D