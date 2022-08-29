class ProductsController < ApplicationController
  def index
    @products = Products.all
  end

  def new
    @product = Product.new
  end

  def edit
    @product = Product.find params[:id]
  end

  def show
    @product = Product.find params[:id]
  end
end
