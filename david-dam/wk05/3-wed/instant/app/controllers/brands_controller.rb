class BrandsController < ApplicationController
  def index
    @brands = Brand.all
  end

  def new
    @brand = Brand.new
  end

  def create
    # raise 'hell'
    brand = Brand.create brand_params
    redirect_to brand #get to /show
  end

  def edit
    @brand = brand.find params[:id]
  end

  def update
  end

  def show
    @brand = Brand.find params[:id]
  end

  def destroy
  end
end

private
def brand_params
  params.require(:brand).permit(:name,:country,:year,:image)
end