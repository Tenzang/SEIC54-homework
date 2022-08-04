# loop do
#     p eval(gets)
# end

# bro i just got this from https://cdragon.medium.com/make-your-own-ruby-repl-from-scratch-2b0677b4b291

class MyREPL
    REPL_PROMPT = 'JackieREPL>> '
    def initialize
      @line_length = 1
    end
    def run
      before_loop
      in_loop
      after_loop
    end
    private
    def before_loop
      print "Welcome to my REPL, please type your commands:\n"
    end
    def in_loop
      loop do
        print "[#{@line_length}] #{REPL_PROMPT}"
        input = gets
        if input == 'exit'
          break
        else
          eval(input)
        end
        @line_length += 1
      end
    end
    def after_loop
      puts "Exit"
    end
  end
  MyREPL.new.run