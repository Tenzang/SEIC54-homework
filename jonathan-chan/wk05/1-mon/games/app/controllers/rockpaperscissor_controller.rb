class RockpaperscissorController < ApplicationController
    def rockpaperscissor
    end

    def choice
        choices = ["Rock", "Paper", "Scissor"]
        @computer = choices[rand(2)]
        @user = params["choice"]
        if (@user == "Rock" && @computer == "Scissor") ||  (@user == "Scissor" && @computer == "Paper") || (@user == "Paper" && @computer == "Rock")
            @result = "You win"
        elsif @user == @computer
            @result = "Its a tie"
        else 
            @result = "You lose"
        end
    end
end