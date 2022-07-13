# def show_menu
    puts "Calculator"
    puts "=-" * 40
    puts "[a] - Addition"
    puts "[-] - Subtract"
    puts "[x] - Multiply"
    puts "[/] - divide"
    puts "[sqr] = Sqr root"
    puts "[q] = Quit"
    print "Enter your choice: "
    menu_choice = gets.chomp.downcase
    if menu_choice == "a"
        puts " you chose addition"
        puts " enter your number1"
        number1 = gets.to_i
        puts " enter your number2"
        number2 = gets.to_i
        puts number1+number2
    elsif menu_choice == "-"
    puts " you chose subtraction"
        puts " enter your number1"
        number1 = gets.to_i
        puts " enter your number2"
        number2 = gets.to_i
        puts number1-number2
    elsif menu_choice == "x"
    puts " you chose multiplication"
        puts " enter your number1"
        number1 = gets.to_i
        puts " enter your number2"
        number2 = gets.to_i
        puts number1*number2
    elsif menu_choice == "/"
    puts " you chose division"
        puts " enter your number1"
        number1 = gets.to_i
        puts " enter your number2"
        number2 = gets.to_i
        puts number1/number2     
    elsif menu_choice == "sqr"
        puts " you chose square root"
            puts " enter your number1"
            number1 = gets.to_i
            puts Math.sqrt(number1) 
end


