class EightballController < ApplicationController
    def form
        end

    def result
        myArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Reply hazy, try again" ]
        @answer = myArray.sample
        end

end
