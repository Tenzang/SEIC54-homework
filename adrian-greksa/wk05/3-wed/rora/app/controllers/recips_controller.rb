class RecipsController < ApplicationController
  def index
    @recips = Recip.all
  end

  def new
    @recip = Recip.new
  end

  def create
    recip = Recip.create recip_params
    redirect_to recip
  end

  def edit
    @recip = Recip.find params[:id] 
  end

  def update
    recip = Recip.find params[:id]
    recip.update recip_params
    redirect_to recip
  end

  def show
    @recip = Recip.find params[:id]
  end

  def destroy
    recip = Recip.find params[:id]
    recip.destroy
    redirect_to recips_path
  end

  private
  def recip_params
    params.require(:recip).permit(:name, :ingredients, :serving, :time, :method, :image, :food_id)
  end
end
