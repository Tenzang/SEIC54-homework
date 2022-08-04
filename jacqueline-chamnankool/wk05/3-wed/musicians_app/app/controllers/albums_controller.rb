class AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def new
    @album = Album.new
  end

  def create
    album = Album.create album_params
    redirect_to album # GET /albums/:id
  end

  def edit
    @album = Album.find params[:id]
  end

  def update
    album = Album.find params[:id]
    album.update album_params # will update AND save to database
    redirect_to album
  end

  def show
    @album = Album.find params[:id]
  end

  def destroy
    album = Album.find params[:id]
    album.destroy
    redirect_to albums_path
  end

  private
  # strong params - secure
  def album_params
    # require the key of album
    params.require(:album).permit(:title, :date, :num_tracks, :image, :artist_id)
  end
end
