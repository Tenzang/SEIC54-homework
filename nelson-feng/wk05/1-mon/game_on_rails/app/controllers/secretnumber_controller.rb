class SecretnumberController < ApplicationController
    def secretnumber
        
    end

    def verdict
        @snumber = rand(1...10)
        @number = params[:guess].to_i
    end
end