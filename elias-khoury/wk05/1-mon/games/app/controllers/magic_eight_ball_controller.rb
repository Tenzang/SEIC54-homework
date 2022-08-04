class MagicEightBallController < ApplicationController
    def home
    end

    def result
        @answer = ['yes', 'no', 'maybe'].sample
    end
end