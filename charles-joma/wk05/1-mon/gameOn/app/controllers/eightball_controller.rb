class EightBallController < ApplicationController
end

def answer 
    @question = params[:question]
    answers = ["Yes","No","Maybe"]
    @response = answera[rand(0..answers.length-1)]
end