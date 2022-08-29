class RockpaperscissorsController < ApplicationController
  def rockpaperscissors
  end

  def rockpaperscissors
  end

  def rpsresult
    conditions = {
      "rock" => "scissosrs",
      "paper" => "rock",
      "scissors" => "paper"
    }

    choice = params[:throw]
    server_choice = conditions.keys.sample

    if conditions[choice] == choice
      @result = "You Win!"
    elsif server_choice == choice
      @result = "Its a draw."
    elsif conditions[server_choice] = choice
      @result = "You lost."
    else
      @result = "#{choice} is not a valid option"
    end
  end

end
