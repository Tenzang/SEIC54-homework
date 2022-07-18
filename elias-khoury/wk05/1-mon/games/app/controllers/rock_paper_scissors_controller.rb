class RockPaperScissorsController < ApplicationController
    def home
    end

    def result
        @choice = params[:choice]
        cchoice = ["Rock", "Paper","Scissors"]
        comp = rand(1..3)
        won = false


        @label = "Computer chose #{cchoice[comp]}"
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
            @finish = "I dont know what that means so-"
        end

        if (won)
            @finish = "YOU WON!!!"
        else
            @finish = "You lost.."
        end
            end

end