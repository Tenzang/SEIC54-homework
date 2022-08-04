class SecretNumberController < ApplicationController
    def home
    end

    def result
        guesser = rand(1..10)
        @name = params[:number].to_i

        if @name == guesser
            @result = 'YAY'
            puts @result
        else
            @result = 'NOO'
            puts @result
        end

    end
end