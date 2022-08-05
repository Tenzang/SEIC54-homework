def show_menu
    puts "=" * 70
    puts "Calculator" # TODO: checkout .center to make this look nicer
    puts "=" * 70 # budget horizontal dividing line
    # Phase 1
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    # Phase 2
    puts "[e] - Exponents"
    puts "[r] - Square root"
    puts "[q] - Quit"
    puts "-" * 70
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

def get_two_nums
    print "→ Enter your first number: "
    first_num = gets.chomp.to_i
    print "→ Enter your second number: "
    second_num = gets.chomp.to_i
    return [first_num, second_num]

    #"Enter your numbers:" # if u wanted to do more than 2 numbers
    #9, 3, 2, 4
    #spit the input, then put that into an array
end

def add(a, b)
    a + b
end

def subtract(a, b)
    a - b
end

def multiply(a, b)
    a * b
end

def divide(a, b)
    a / b
end

def exponent(a, b)
    a ** b
end

def sqrt(a)
    Math.sqrt(a)
end

until menu_choice == "q"
    puts "-" * 70
    case menu_choice
    when "a"
        puts "You chose addition!"
        nums = get_two_nums
        puts "→→ #{nums[0]} + #{nums[1]} = #{add nums[0], nums[1]}"
    when "s"
        puts "You chose subtraction!"
        nums = get_two_nums
        puts "→→ #{nums[0]} - #{nums[1]} = #{subtract nums[0], nums[1] }"
    when "m"
        puts "You chose multiplication!"
        nums = get_two_nums
        puts "→→ #{nums[0]} * #{nums[1]} = #{multiply nums[0], nums[1]}"
    when "d"
        puts "You chose multiplication!"
        nums = get_two_nums
        puts "→→ #{nums[0]} / #{nums[1]} = #{divide nums[0], nums[1]}"
    when "e"
        puts "You chose exponent!"
        nums = get_two_nums
        puts "→→ #{nums[0]} ** #{nums[1]} = #{exponent nums[0], nums[1]}"
    when "r"
        puts "You chose square root!"
        print "Enter your number: "
        num = gets.chomp.to_i
        puts "→→ Square root of #{num} = #{sqrt num}"
    else
        puts "Invalid selection."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "-" * 70
puts "Thanks for using this GREAT calculator. :D"