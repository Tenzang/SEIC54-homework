class SecretnumberController < ApplicationController
    def secretnumber
    end

    def choice
        computer = rand(10).to_s
        user = params["choice"]
        unless computer == user
            @result = "Unlucky, Guess again"
        else 
            @result = "You guessed right!"
        end
    end
end