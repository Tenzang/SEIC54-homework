# Defining the function
def show_menu
    puts "Calculator" # Check out a method call center
    puts "=-" * 40 # BUdget horizontal dividing line
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - division"
    puts "[ex] - Exponentiation"
    puts "[sq] - Square Root"
    # TODO: add the other operations here (options)
    puts"[q] - Quit"
    print "Enter your choice: "
end

# Calls the function
show_menu
# Get the option from the user  
menu_choice = gets.chomp.downcase

#Until menu_choice 
until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        print "Enter the two numbers youd like to perform addition on: "
        addition = gets.chomp.split("+")
        first_number = addition[0].to_i 
        second_number = addition[1].to_i
        total = first_number += second_number
        puts " The total is #{ total } "
    when 's'
        puts "You chose Subtraction"
        print "Enter the numbers you would like to perform Multiplation on: "
        subtraction = gets.chomp.split("-")
        first_number = subtraction[0].to_i
        second_number = subtraction[1].to_i
        total = first_number -= second_number
        puts "The total is #{ total } "
    when 'm'
        puts "You chose Multiplication "
        print "Enter the two numbers you would like to perform Multiplication on: "
        multiplication = gets.chomp.split("*")
        first_number = multiplication[0].to_i
        second_number = multiplication[1].to_i
        total = first_number * second_number
        puts "The total is #{ total } "
    when 'd'
        puts "You chose division"
        print "Enter the number you would like to perform division on: "
        division = gets.chomp.split("/")
        first_number = division[0].to_i
        second_number = division[1].to_i
        total = first_number / second_number
        puts "The total is #{ total }"
    when 'ex'
        puts "You chose Exponentiation"
        print "Enter two nnumbers, the first will be the number being raised and the second will be the power number: "
        exponent = gets.chomp.split("**")
        first_number = exponent[0].to_i
        second_number = exponent[1].to_i
        total = first_number ** second_number
        puts "The total is #{ total }"
    when 'sq'
        puts "You chose the square root option"
        print "Enter a single number that you would like to find the square root of: "
        sqroot = gets.chomp
        first_number = sqroot.to_i
        total = Math.sqrt(first_number)
        puts "The square root of #{ sqroot } is  #{ total }"
    else
        puts "Invalid selection. You idiot"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"


def mortgage_Calc 
    puts "This is the morgage calculator"
    puts "=-" * 40 
    print "Enter the principle of the loan: "
    principle = gets.to_f
    print "Enter the interest rate: "
    interest = gets.to_f
    print "Enter the number of payments: "
    numberOf = gets.to_f

    #This does not work but it calculates somthing but i have no idea
    monthly = principle * (interest * 1 + interest**numberOf) / (1 + interest**numberOf) - 1
    puts "You will repay a total of: #{monthly}"
    puts "[q] - Quit"
end
mortgage_Calc


def bmi(height,weight)
    puts "Enter is yopur weight: "
    weight = gets.to_i
    puts "Enter your height: "
    height = gets.to_i
    bmi = height / weight**2
    puts bmi
end

bmi(176,75)

