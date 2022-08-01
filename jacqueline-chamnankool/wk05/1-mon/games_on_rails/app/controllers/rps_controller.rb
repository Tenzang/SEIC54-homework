class RpsController < ApplicationController
    def choose
    end

    def result
        @throw = params[:throw]
        options = [
            "🪨",
            "📄",
            "✂️"
        ]
        @computer_throw = options[rand(3)]
        conditions = {
            "🪨" => "✂️",
            "📄" => "🪨",
            "✂️" => "📄"
        }

        if conditions[@throw] == @computer_throw
            @result = "You win!"
        elsif @throw == @computer_throw
            @result = "It's a draw!"
        else
            @result = "You lose!"
        end
    end
end