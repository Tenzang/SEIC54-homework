class MoviesController < ApplicationController

    def movies
    end

    def edit
        @movie = Movie.find params[:id]
    end

    def index
    end

    def new
    end

    def show
        @movie = Movie.find params[:id]
    end

    def create
        movie = Movie.create :title => params[:title], :image => params[:image], :director => params[:direcotr], :producer => params[:producer], :stars => params[:stars]
        redirect_to movie_path(movie.id) # GET to show
    end


end