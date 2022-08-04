def show_menu
    puts "calculator" #TODO check out .center how to make it look pretty
    puts "-=" * 40 #create budget horizontal dividing line
    puts "[a] - Addition" # TODO: add the other operation here (multiply,divide,substact)
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponents"
    puts "[sq] - Square roots"
    puts "[mg] - Mortgage"
    puts "[q] - Quit"
    puts "-=" * 40 #create budget horizontal dividing line
    puts "Enter your choice: "
end


def mortgage (a,r,n)
    a*(r/n)
end

def add(a,b)
    a + b 
end

def subtract(a,b)
    a - b 
end

def multiply(a,b)
    a * b 
end

def divide(a,b)
    a / b 
end

def exponent(a,b)
    a ** b 
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "you chose additon"
        print "enter 1st number: "
        a = gets.chomp.to_i
        print "enter 2nd number: "
        b = gets.chomp.to_i
        puts "#{ a } + #{ b } = #{ add(a,b) }"
    when 's'
        puts "you chose substraction"
        print "enter 1st number: "
        a = gets.chomp.to_i
        print "enter 2nd number: "
        b = gets.chomp.to_i
        puts "#{ a } - #{ b } = #{ subtract(a,b) }"
    when 'm'
        puts "you cho cho choose multiplication"
        print "enter 1st number: "
        a = gets.chomp.to_i
        print "enter 2nd number: "
        b = gets.chomp.to_i
        puts "#{ a } * #{ b } = #{ multiply(a,b) }"
    when 'd'
        puts "you chose division"
        print "enter 1st number: "
        a = gets.chomp.to_i
        print "enter 2nd number: "
        b = gets.chomp.to_i
        puts "#{ a } / #{ b } = #{ divide(a,b) }"
    when 'e'
        puts "You chose exponents"
        print "enter 1st number: "
        a = gets.chomp.to_i
        print "enter 2nd number: "
        b = gets.chomp.to_i
        puts "#{ a } ** #{ b } = #{ exponent(a,b) }"
    when 'sq'
        puts "you chose square root"
        print "enter a number: "
        a = gets.chomp.to_i
        puts Math.sqrt(a)
    when 'mg'
        puts "You chose Monthly Mortgage calculator"
        puts "enter your amount: "
        a = gets.chomp.to_i
        puts "enter your interest rate: "
        r = gets.chomp.to_f
        puts "enter your months to pay of: "
        n = gets.chomp.to_i
        puts "#{ mortgage(a,r,n) } monthly payments"
    else
        puts "Bruh.. invalid selection."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"