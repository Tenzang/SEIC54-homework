class MagicballController < ApplicationController
    def magicball
    end

    def fate
        @user_answer = params["answer"]
        possible_answers = [
            ["It is certain.", "It is decidely so.", "Without a doubt.", "Yes definitely.", "You may rely on it."],
            ["As I see it, yes.", "Most Likely.", "Outlook good.", "Yes.", "Signs point to yes."],
            ["Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again."],
            ["Don't count on it.", "My reply is no.", "My source say no.", "Outlook not so good.", "Very doubtful."]
        ]
        number_one = rand(3)
        nunber_two = rand(4)
        @fate = possible_answers[number_one][nunber_two]
    end
end