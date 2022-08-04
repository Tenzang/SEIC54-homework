class SpsController < ApplicationController
    def sps
    end

    def game
        puts "Rock, Paper or Scissors"
        @choice = params[:choice]
        cchoice = ["Rock", "Paper","Scissors"]
        comp = rand(1..3)
        won = false


        puts "Computer chose #{cchoice[comp]}"
        if (@choice == "Rock")
            if (comp == 2)
                won = false
            end
            if (comp == 3)
                won = true
            end
        elsif (@choice == "Paper")
            if (comp == 3)
                won = false
            end
            if (comp == 1)
                won = true
            end
        elsif (@choice == "Scissors")
            if (comp == 1)
                won = false
            end
            if (comp == 2)
                won = true
            end
        else
           @result= "I dont know what that means so-"
        end

        if (won)
            @result=  "YOU WON!!!"
        else
            @result=  "You lost.."
        end

    end
end