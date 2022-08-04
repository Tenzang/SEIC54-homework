class PhonesController < ApplicationController
  def index
    @phones = Phone.all
  end

  def new
    @phone = Phone.new
  end

  def create
    phone = Phone.create phone_params
    redirect_to phone
  end

  def edit
    @phone = Phone.find params[:id]
  end

  def update
    phone = Phone.find params[:id]
    phone.update phone_params
    redirect_to phone
  end

  def show
    @phone = Phone.find params[:id]
  end


  def destroy
    phone = Phone.find params[:id]
    phone.destroy
    redirect_to phones_path
  end

  private
  def phone_params
    params.require(:phone).permit(:name, :year, :price, :processor, :company_id)
  end
end
