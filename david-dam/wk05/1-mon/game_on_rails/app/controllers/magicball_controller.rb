class MagicballController < ApplicationController

    def form
    end
    
    def info
        @question = params[:question]
        answer =[" It is certain.","Most likely.","Reply hazy, try again.","Concentrate and ask again.","Don't count on it.","My sources say no."]
        the_answer = answer.shuffle.first.to_s
        @answer = the_answer
    end
end

