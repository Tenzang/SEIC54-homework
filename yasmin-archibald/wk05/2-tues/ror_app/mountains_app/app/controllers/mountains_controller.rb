class MountainsController < ApplicationController
    def index
        @mountains = Mountain.all 
    end
    def show
        @mountain = Mountain.find params[:id]
    end

    def new
    end

    def create
        mountain = Mountain.create :name => params[:name], :image => params[:image], :location => params[:location], :summit => params[:summit], :population => params[:population]
        redirect_to mountain_path(mountain.id)
    end

    def edit
        @mountain = Mountain.find params[:id]
    end
    
    def update
        mountain = Mountain.find params[:id]
        mountain.name = params[:name]
        mountain.image = params[:image]
        mountain.location = params[:location]
        mountain.summit = params[:summit]
        mountain.population = params[:population] 
        mountain.save
        redirect_to mountain_path(mountain.id)
    end

    def destroy
    mountain = Mountain.find(mountain.id)
    mountain.destroy 
    redirect_to mountains_path
    end
end