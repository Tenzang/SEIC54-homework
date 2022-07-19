class GamesController < ApplicationController
    def index
    end

    def magic8ball
    end

    def question
        @question = params[:question]
        @answers = ['Yes.', 'Maybe.', 'No.']
        @response = @answers.sample
    end


    def secretnumber
        # raise "hell"
    end

    def snresult
        @secret_number = rand(1..10)
        if params[:guess].to_i == @secret_number
            @result = "win"
        else
            @result = "guess again"
        end
        # raise "hell"
    end

    def rockpaperscissors
    end

    def rpsresult
        conditions = {
            "rock" => "scissors",
            "paper" => "rock",
            "scissors" => "paper"
        }
        
        choice = params[:throw]
        server_choice = conditions.keys.sample
          
        if conditions[choice] == server_choice
          @result = "You won!"
        elsif server_choice == choice
          @result = "Its a draw."
        elsif conditions[server_choice] == choice
          @result = "You lost."
        else
          @result = "#{choice} is not a valid option"
        end

    end
end

