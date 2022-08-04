require 'sinatra'
require 'sinatra/reloader'
require 'active_record'

ActiveRecord::Base.establish_connection(
    :adapter => 'sqlite3',
    :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Artist < ActiveRecord::Base
    # has_many :manga
end

class Manga < ActiveRecord::Base
    # belongs_to :artist
end

get '/' do
    erb :home
end

# INDEX
get '/manga' do
    @manga = Manga.all
    erb :manga_index
end

# NEW
get '/manga/add' do
    erb :manga_add
end

# CREATE
post '/manga' do
    manga = Manga.new
    manga.name = params[:name]
    manga.artist = params[:artist]
    manga.image = params[:image]
    manga.save
    redirect to("/manga/#{ manga.id }")
end

# SHOW
get '/manga/:id' do
    @manga = Manga.find params[:id]
    erb :manga_show
end

# EDIT
get '/manga/:id/update' do 
    @manga = Manga.find params[:id]
    erb :manga_edit
end

# UPDATE
post '/manga/:id' do
    manga = Manga.find params[:id]
    manga.name = params[:name]
    manga.artist = params[:artist]
    manga.image = params[:image]
    manga.save
    redirect to("/manga/#{ manga.id }")
end

# DELETE
get '/manga/:id/delete' do 
    manga = Manga.find params[:id]
    manga.destroy
    redirect to ('/manga')
end

#################### ARTIST ####################

# INDEX
get '/artist' do
    @artist = Artist.all
    erb :artist_index
end

# NEW
get '/artist/add' do
    erb :artist_add
end

# SHOW
get '/artist/:id' do
    @artist = Artist.find params[:id]
    erb :artist_show
end

# CREATE
post '/artist' do
    artist = Artist.new
    artist.name = params[:name]
    artist.image = params[:image]
    artist.save
    redirect to("/artist/#{ artist.id }")
end

# EDIT
get '/artist/:id/update' do 
    @artist = Artist.find params[:id]
    erb :artist_edit
end

# UPDATE
post '/artist/:id' do
    artist = Artist.find params[:id]
    artist.name = params[:name]
    artist.image = params[:image]
    artist.save
    redirect to("/artist/#{ artist.id }")
end

# DELETE
get '/artist/:id/delete' do 
    artist = Artist.find params[:id]
    artist.destroy
    redirect to ('/artist')
end