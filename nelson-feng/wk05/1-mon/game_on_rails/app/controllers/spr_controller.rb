class SprController < ApplicationController
    def spr
    end
    
    def battle
        choice = ["Rock","Scissors","Paper"]
        @canswer = choice[rand(0..2)]
        @answer = params[:user]
    end

end
