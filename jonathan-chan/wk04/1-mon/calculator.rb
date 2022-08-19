def show_menu
    puts "Calculator"
    puts "=-"*40 #divider?
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[e] - Exponent"
    puts "[r] - Square-root"
    puts "[q] - Quit"
    print "Enter you choice "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "Please enter values"
        value1 = gets.to_i
        value2 = gets.to_i
        puts "Result: #{value1 + value2}"
        puts "**"*40
    when 's'
        puts "You chose subtraction!"
        puts "Please enter values"
        value1 = gets.to_i
        value2 = gets.to_i
        puts "Result: #{value1 - value2}"
        puts "**"*40
    when 'm'
        puts "You chose multiply!"
        puts "Please enter values"
        value1 = gets.to_i
        value2 = gets.to_i
        puts "Result: #{value1 * value2}"
        puts "**"*40
    when 'd'
        puts "You chose divide!"
        puts "Please enter values"
        value1 = gets.to_i
        value2 = gets.to_i
        puts "Result: #{value1 / value2}"
        puts "**"*40
    when 'e'
        puts "You chose exponent!"
        puts "Please enter values"
        value1 = gets.to_i
        value2 = gets.to_i
        puts "Result: #{value1 ** value2}"
        puts "**"*40
    when 'r'
        puts "You chose divide!"
        puts "Please enter values"
        value1 = gets.to_i
        puts "Result: #{Math.sqrt(value1)}"
        puts "**"*40
    else 
        puts "Invalid Selection"
    end
    show_menu
    menu_choice = gets.chomp.downcase  
end

puts "( ͡° ͜ʖ ͡°) Thanks for using me UwU ( ͡° ͜ʖ ͡°)"