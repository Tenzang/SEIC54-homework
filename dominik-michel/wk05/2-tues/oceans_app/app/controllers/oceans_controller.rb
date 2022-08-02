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
        ocean = Ocean.create :name =>params[:name], :image => params[:image], :temp => params[:temp], :depth => params[:depth], :islands => params[:islands]
        redirect_to oceans_path(ocean.id)
    end

    def edit
        @ocean = Ocean.find params[:id]
    end

    def update
        ocean = Ocean.find params[:id]
        ocean.name = params[:name]
        ocean.image = params[:image]
        ocean.temp = params[:temp]
        ocean.depth = params[:depth]
        ocean.islands = params[:islands]
        ocean.save
        redirect_to oceans_path(ocean.id)
    end

    def destroy
        ocean= Ocean.find params[:id]
        ocean.destroy
        redirect_to oceans_path
    end

end