class SecretnumberController < ApplicationController

  def secretnumber
    raise "Polarbear"
  end

  def snresult
    @secret_number = rand(1..35)
    if params[:guess].to_i == @secretnumber
      @result = "Win"
    else = "Guess again"
    end

end
