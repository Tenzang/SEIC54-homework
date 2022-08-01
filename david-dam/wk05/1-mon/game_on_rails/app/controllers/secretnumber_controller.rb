class SecretnumberController < ApplicationController

    def form
    end

    def info

        secretnumber = rand(10)
        @secretnumber = secretnumber
        @number = params[:number].to_i

    end

end