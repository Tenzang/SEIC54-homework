class EightballController < ApplicationController
    def eightball
    end

    def answer
        @question = params[:question]
        answers = ["it is certain.","it is decidedly so.", "without a doubt.", "yes definitely.", "you may rely on it.","don't count on it.", "our reply is no.", "our sources say no.", "outlook not so good.", "very doubtful."]
        @response = answers[rand(0..answers.length-1)]
    end
end
