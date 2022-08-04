class RpsController < ApplicationController

    def home
        render :home
    end

    def rpsresult
        @comp_choice = ["rock", "paper", "scissors"].sample
        @user_choice = params[:throw]
        if @user_choice == @comp_choice 
            @rpsresult = "It's a draw"
        elsif @user_choice == "paper" && @comp_choice == "scissors" || @user_choice == "scissors" && @comp_choice == "rock"  || @user_choice == "rock" && @comp_choice == "paper" 
            @rpsresult = "You lose"
        else
            @rpsresult = "You win"
        end
        render :rpsresult
    end



end