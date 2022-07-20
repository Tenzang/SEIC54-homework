class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params
    redirect_to artist # GET /artists/:id
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params # will update AND save to database
    redirect_to artist
  end

  def show
    @artist = Artist.find params[:id]
  end

  def destroy
    artist = Artist.find params[:id]
    artist.destroy
    redirect_to artists_path
  end

  private
  # strong params - secure
  def artist_params
    # require the key of artist
    params.require(:artist).permit(:name, :genre, :label, :years, :image)
  end
end
