class IcebergsController < ApplicationController

    def index
      @icebergs = Iceberg.all
    end

    def show
        @iceberg = Iceberg.find params[:id]
    end

    def new
    end 

    def create
        iceberg = Iceberg.create :name => params[:name], :image => params[:image], :bubbles => params[:bubbles], :stability => params[:stability],
        :colors => params[:color], :shapes => params[:shape]
        redirect_to iceberg_path(iceberg.id)
    end 
    def edit 
        @iceberg = Iceberg.find params[:id]
    end 
    def update
        iceberg = Iceberg.find params[:id]
        iceberg.name = params[:name]
        iceberg.image = params[:image]
        iceberg.bubbles = params[:bubbles]
        iceberg.stability = params[:stability]
        iceberg.colors = params[:colors]
        iceberg.shapes = params[:shapes]
        iceberg.save
        redirect_to iceberg_path(iceberg.id)
    end
    def destroy
        iceberg = Iceberg.find params[:id]
        iceberg.destroy
        redirect_to icebergs_path
    end
end
