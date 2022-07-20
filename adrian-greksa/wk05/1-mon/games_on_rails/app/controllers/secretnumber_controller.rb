class SecretnumberController < ApplicationController
    def start
    end

    def result
        @guess = params[:guess].to_i
        @secretnumber = rand(1..10)
    end
end