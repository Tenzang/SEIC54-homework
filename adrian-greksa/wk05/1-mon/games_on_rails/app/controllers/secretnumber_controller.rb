class SecretnumberController < ApplicationController
    def start
    end

    def result
        @result = params[:name]
        raise "hell"
    end
end