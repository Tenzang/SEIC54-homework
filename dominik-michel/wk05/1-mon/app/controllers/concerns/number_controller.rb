class NumberController < ApplicationController
    def number
    end

    def result
        @num=rand(1..10)
        @val= params[:val].to_i
    end
       
end