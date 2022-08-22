class MountainsController < ApplicationController
    def index 
        @mountains = Mountain.all
    end

    def new 
    end

    def create
        mountain = Mountain.create :name => params[:name], :image => params[:image], :country => params[:country], :height => params[:height], :deaths => params[:deaths]

        redirect_to mountain_path(mountain.id)
    end

    def show
        @mountain = Mountain.find params[:id]
    end

    def edit 
        @mountain = Mountain.find params[:id]
    end

    def update 
        mountain = Mountain.find params[:id]
        mountain.name = params[:name]
        mountain.image = params[:image]
        mountain.country = params[:country] 
        mountain.height = params[:height]
        mountain.deaths = params[:deaths]
        mountain.save 
        redirect_to mountain_path(mountain.id)
    end

    def destroy
        mountain = Mountain.find params[:id]
        mountain.destroy 
        redirect_to mountains_path
    end

end