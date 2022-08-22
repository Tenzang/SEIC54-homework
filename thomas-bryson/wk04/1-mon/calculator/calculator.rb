def show_menu
    puts "Calculator".center(75)
    puts "=-" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[adv] - Advanced Arithmetic"
    puts "[mort] - Mortgage Calculator"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!" # Addition
            puts ""
            puts ""
            puts ""
            puts "Choose your first number "
            first_number = gets.to_f
            puts "Choose your second number "
            second_number = gets.to_f
            puts ""
            puts "Your final sum is #{first_number + second_number}"
    when 's'
        puts "You chose subtraction" # Subtraction
            puts ""
            puts ""
            puts ""
            puts "Choose your first number "
            first_number = gets.to_f
            puts "Choose your second number "
            second_number = gets.to_f
            puts ""
            puts "Your final subtraction is #{first_number - second_number}"
    when 'm' 
        puts "You chose multiplication" # Multiplication
            puts ""
            puts ""
            puts ""
            puts "Choose your first number "
            first_number = gets.to_f
            puts "Choose your second number "
            second_number = gets.to_f
            puts ""
            puts "Your final product is #{first_number * second_number}"
    when 'd'
        puts "You chose division" # Division
            puts ""
            puts ""
            puts ""
            puts "Choose your first number "
            first_number = gets.to_f
            puts "Choose your second number "
            second_number = gets.to_f
            puts ""
            puts "Your final dividend is #{first_number / second_number}"
    when 'adv'
        puts "You chose Advanced Arithmetic"
            puts "[mod] - Modulus"
            puts "[sqrt] - Square Root"
            puts "[pow] - Exponentials"
            when 'mod'
                puts "You chose modulo" # Modulo
                    puts ""
                    puts ""
                    puts ""
                    puts "Choose your first number "
                    first_number = gets.to_f
                    puts "Choose your second number "
                    second_number = gets.to_f
                    puts ""
                    puts "Your final remainder is #{first_number % second_number}".

            when 'mort'
                puts "You chose Mortgage Calculator"
    
    
    else
        puts "Invalid selection. you dingus!" 
    end

    show_menu
    menu_choice = gets.chomp.downcase


end

puts "Thanks for using this crappy calculator"