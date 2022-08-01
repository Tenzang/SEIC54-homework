class PagesController < ApplicationController
    def home
    end
    def fortune
    end
    def fortuned
        @fortune = ["Yes", "No", "Maybe", "I don't know", "can you repeat the question?"]
        @pick = @fortune[rand(4)]
    end
end