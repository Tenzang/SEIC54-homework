class SecretController < ApplicationController

    def secret
        render :secret
    end

    def validate
        @num = params[num].to_i
        @secret = 7
    if @num == @secret then 
        render :win
    else
        render :lose
    end
    
end
