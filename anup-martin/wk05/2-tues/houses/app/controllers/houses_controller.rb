class HousesController < ApplicationController

    def index
        @houses = Houses.find params[id]
    end

    def show 
        @house = Houses.find params[id]
    end

    def new
    end

    def create
        house = Houses.create :name=> params[:name], :location => params[:location], :address=> params[:address]
        redirect_to houses_path
    end

    def edit
        @house = Houses.find params[:id]
    end

    def update
        house = House.find params[:id]
        house = House.find params[:location]
        house = House.find params[:address]
        house.save
        redirect_to houses_path
    end

    def destroy
        house = House.find params[:id]
        house.destroy
        redirect_to houses_path
    end

end
