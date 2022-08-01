class RiversController < ApplicationController
    def index
        @rivers = River.all #.sort(name) to put in alphabetical order
    end

    def show
        @river = River.find params[:id]
    end

    def new
    end

    def create
        # make a new river
        # fill in the form data from params
        # save the river
        river = River.create :name => params[:name], :image => params[:image], :length => params[:length], :drainage => params[:drainage], :discharge => params[:discharge], :outflow => params[:outflow]
        # redirect to the SHOW page
        redirect_to river_path(river.id) # GET to SHOW
    end

    def edit
        @river = River.find params[:id]
    end

    def update
        river = River.find params[:id]
        river.name = params[:name]
        river.image = params[:image]
        river.length = params[:length]
        river.drainage = params[:drainage]
        river.discharge = params[:discharge]
        river.outflow = params[:outflow]
        river.save
        redirect_to river_path(river.id) # GET to show
    end

    def destroy
        river = River.find params[:id]
        river.destroy
        redirect_to rivers_path
    end
end