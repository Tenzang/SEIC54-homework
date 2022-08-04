def show_menu
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "-=" * 40 # budget horizontal dividing line
    puts "[a] - Addition"
    # TODO: add the other operations here (multiply, divide, subtract)
    puts "[s] - Subtraction"
    puts "[m] - Multiply"
    puts "[d] - Division" 
    puts "[e] - Exponent"
    puts "[sq] - Square Root"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You choose addition!"
        puts "Please enter your first number: "
        num1 = gets.to_i
        puts "Please enter your second number: "
        num2 = gets.to_i
        puts "The sum of your 2 numbers is: #{num1 + num2}"
    # add more when classes for subtract, multiply etc
    when 's'
        puts "You choose subtraction!"
        puts "Please enter your first number: "
        num1 = gets.to_i
        puts "Please enter your second number: "
        num2 = gets.to_i
        puts "The subtraction of your 2 numbers is: #{num1 - num2}"
    when 'm'
        puts "You choose multiplication!"
        puts "Please enter your first number: "
        num1 = gets.to_i
        puts "Please enter your second number: "
        num2 = gets.to_i
        puts "The multiplication of your 2 numbers is: #{num1 * num2}"
    when 'd'
        puts "You choose division!"
        puts "Please enter your first number: "
        num1 = gets.to_i
        puts "Please enter your second number: "
        num2 = gets.to_i
        puts "The division of your 2 numbers is: #{num1 / num2}"
    when 'e'
        puts "You choose exponents!"
        puts "Please enter your first number: "
        num1 = gets.to_i
        puts "Please enter your second number: "
        num2 = gets.to_i
        puts "The 1st number to the power of the 2nd number is: #{num1 ** num2}"
    when 'sq'
        puts "You choose Square Root!"
        puts "Please enter your number: "
        num1 = gets.to_i
        puts "The square root of your number is: #{Math.sqrt(num1)}"
   else
        puts "Invalid selection. "
   end


   show_menu
   menu_choice = gets.chomp.downcase
end

puts "Thanks for using this calculator"
# "-=" * 40