puts "Welcome to Yasmin's hesitant interpretation of what a REPL is (not too sure, hmmm) ... "
puts "What's your name? "
name = gets.chomp
puts "Do you know what a repl is? For surel, don't lie. (y/n): "
answer = gets[0].downcase
if answer == "y"
    puts "So mr #{name} thinks they're better than me huh??!" 
else 
    puts "Same.."
end