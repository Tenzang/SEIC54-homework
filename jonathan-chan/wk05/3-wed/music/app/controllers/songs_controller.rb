class SongsController < ApplicationController
  def index
    #The index includes everything hence @songs is used
    @songs = Song.all #Song.all gathers information on each 'Song' from the database
  end

  def new
    #Making one new song hence @song is used
    @song = Song.new 
  end

  def create
    #Pushing the new song into the database
    song = Song.create song_params
    redirect_to song #redirects user to song created
  end

  def edit
    @song = Song.find params[:id] #params is gathered from the url the user clicked
  end

  def update
    song = Song.find params[:id]
    song.update song_params #update the database with user submitted input
    redirect_to song #redirect user to updated song
  end

  def show
    @song = Song.find params[:id] 
  end

  def destroy
    song = Song.find params[:id]
    song.destroy
    redirect_to songs_path #redirect user to song index
  end

  private
  def song_params
    params.require(:song).permit(:name, :genre, :rating, :released, :spotify, :image, :artist_id)
  end
end
