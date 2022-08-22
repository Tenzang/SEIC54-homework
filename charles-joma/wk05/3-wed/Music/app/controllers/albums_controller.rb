class RecordsController < ApplicationController
  def index
    @albums = Album.all 
  end

  def new
    @albums = Album.new
  end

  def edit
  end

  def show
  end
end
