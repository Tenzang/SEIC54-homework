class GamesController < ApplicationController
    def index
    end

    def eightball
    end

    def question
        @inputValue = params["quetstion"]
    end
end
