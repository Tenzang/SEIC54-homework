class BrandsController < ApplicationController
  def index
    @brands = Brand.all
  end

  def new
    @brands = Brand.new
  end

  def create
    brand = Brand.create brand_params
    redirct_to brand # get to /show
  end

  def edit
    @brand = Brand.find params[:id]
  end

  def update
  end # redundent edit and update

  def show
    @brand = Brand.find params[:id]
  end
    
  def destroy
    @brand = Brand.find destroy[:id]
  end

  def private
  end
end
