class SecretController < ApplicationController
    def choose
    end

    def result
        @guess = params[:guess].to_i
        @target_guess = rand(1..11)
        @result = @guess == @target_guess ? "You win!" : "Incorrect guess!"
    end
end