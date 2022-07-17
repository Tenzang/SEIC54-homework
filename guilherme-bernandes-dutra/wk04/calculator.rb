def show_menu ()
    puts "calculator" #TODO check out.center to make this look nicer
    puts "=-" * 40  #Budget horizpntal dividing line
    puts "[a]- Addition" #TODO: add the other operations here (multiply, divide, subtract)
    puts "[s]- Subtraction"
    puts "[m]- Multipication"
    puts "[d]- Division "
    puts "[q]- Quit"
    puts "=-" * 40
    print "enter your choice"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "what is the first number you would you like to add"
        first_add = gets.to_i
        puts "what is the second number you would you like to add"
        second_add = gets.to_i

       result = first_add + second_add 
        print result
             
    when 's'
        puts "what is the first number you would you like to subtract"
        first_subtract = gets.to_i
        puts "what is the second number you would you like to subtract"
        second_subtract = gets.to_i

       result = first_subtract - second_subtract 
        print result
    when 'm'
        puts "what is the first number you would you like to multiply"
        first_multiply = gets.to_i
        puts "what is the second number you would you like to multiply"
        second_multiply = gets.to_i

       result = first_multiply * second_multiply 
        print result 
    when 'd'
        puts "what is the first number you would you like to divide"
        first_divide = gets.to_i
        puts "what is the second number you would you like to divide"
        second_divide = gets.to_i

       result = first_divide / second_divide 
        print result

    end

    

    show_menu
    menu_choice= gets.chomp.downcase
end

puts "thanks for using this lobly calculator"
