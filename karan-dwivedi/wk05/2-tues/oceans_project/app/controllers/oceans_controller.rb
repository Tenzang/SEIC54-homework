class OceansController < ApplicationController
    def index
        @oceans = Ocean.all
    end

    def show
        @ocean = Ocean.find params[:id]
    end

    def new
    end

    def create
        ocean = Ocean.create :name => params[:name], :image => params[:image], :country => params[:country]
        redirect_to ocean_path(ocean.id) # GET to show
    end

    def edit
        @ocean = Ocean.find params[:id]
    end

    def update
        ocean = Ocean.find params[:id]
        ocean.name = params[:name]
        ocean.image = params[:image]
        ocean.country = params[:country]
        ocean.save
        redirect_to ocean_path(ocean.id) # GET to show
    end

    def destroy
        ocean = Ocean.find params[:id]
        ocean.destroy
        redirect_to oceans_path
    end
end