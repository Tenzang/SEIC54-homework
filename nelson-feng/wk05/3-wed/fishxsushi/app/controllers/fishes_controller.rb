class FishesController < ApplicationController
  def index
    @fishes = Fish.all
  end

  def new
    @fish = Fish.new
  end

  def create
    fish = Fish.create fish_params
    redirect_to fish
  end

  def edit
    @fish = Fish.find params[:id]
  end

  def update
    fish = Fish.find params[:id]
    fish.update fish_params
    redirect_to fish
  end

  def show
    @fish = Fish.find params[:id]
  end

  def destroy
    fish = Fish.find params[:id]
    fish.destroy
    redirect_to fishes_path
  end

  private
  def fish_params
    params.require(:fish).permit(:name, :max_age, :diet, :habitat, :image)
  end
end
