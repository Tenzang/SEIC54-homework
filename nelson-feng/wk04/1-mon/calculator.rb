#THE CALCULATOR

#FUNCTIONS

def show_menu
    puts "Calculator" #TODO : check out . center to make this look nicer
    puts "//\\" * 50 #Budget Horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtract"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[e] - Exponents"
    puts "[sq] - Square Root"
    puts "[mg] - Mortgage"
    puts "[bmi] - Body Mass Index"
    puts "[trip] - Trip Planner"
    puts "[q]- Quit"
    print "Enter your Choice: "
end

def addition(a,b)
    a+b
end

def subtraction(a,b)
    a-b
end

def multiply(a,b)
    a*b
end

def divide(a,b)
    a/b
end

def exponent(a,b)
    a**b
end

def squareroot(a)
    Math.sqrt(a)
end

def mortgage(a,r,n)
    a*(r/n)
end

def bmi(weight,height)
    weight/((height)**2)
end

def triplength(d,s)
    d/s
end

def tripCost(f,m,d)
    (d/m)*f
end

def delay()
    print "Please enter any key to proceed "
    gets
end


show_menu #calling function
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice

    when 'a' #ADDITION
        print "First number "
        a = gets.to_i
        print "Second number "
        b = gets.to_i
        puts "#{a} plus #{b} is #{addition(a,b)}"
        delay

    when 's' #SUBTRACTION
        print "First number "
        a = gets.to_i
        print "Second number "
        b = gets.to_i
        puts "#{a} minus #{b} is #{subtraction(a,b)}"
        delay

    when 'm' #MULTIPLY
        print "First number "
        a = gets.to_i
        print "Second number "
        b = gets.to_i
        puts "#{a} multiplied by #{b} is #{multiply(a,b)}"
        delay

    when 'd' #DIVISION
        print "First number "
        a = gets.to_i
        print "Second number "
        b = gets.to_i
        puts "#{a} divided by #{b} is #{divide(a,b)}"
        delay

    when 'e' #EXPONENTIALS
        print "Number "
        a = gets.to_i
        print " How many times did you want it powered by  "
        b = gets.to_i
        puts "#{a} ^ #{b} is #{exponent(a,b)}"
        delay

    when 'sq' #SQUARE ROOT
        print "What number would you like to square root? "
        a = gets.to_i
        puts "The square root of #{a} is #{squareroot(a)}"
        delay

    when 'mg' #Mortgage
        print "How much have you borrowed? "
        a = gets.to_i
        print "What is your annual interest rate in decimals? "
        r = gets.to_f
        print "How many times do you have to pay annually? "
        n = gets.to_i
        puts "Your monthly mortgage is $#{mortgage(a,r,n)}"
        delay

    when 'bmi'
        print "Please tell me your weight in kilos"
        weight = gets.to_f
        print "Please tell my you height in metres"
        height = gets.to_f
        puts "Your BMI is #{bmi(weight,height)}"
        delay

    when 'trip'
        print "What is the distance of your trip in miles? "
        d = gets.to_f
        print "What is your average speed mph? "
        s = gets.to_f
        print "How much is fuel per gallon? "
        f = gets.to_f
        print "How many miles per gallon of fuel? "
        m = gets.to_f

        puts "You will arrive at your destination at the average speed of #{s}mph in #{triplength(d,s)} hours"
        puts "Your trip will cost you $#{tripCost(f,m,d)}"
        delay
    else
        puts "Invalid Selection"
        delay

    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"