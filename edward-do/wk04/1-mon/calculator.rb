def show_menu
    puts "Calculator" # TODO: checout .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    # TODO: add the other operations here (multiply, divide, subtract)
    puts "[x] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponention"
    puts "[s] - Square root"
    puts "[m] - Mortgage calculator"
    puts "[b] - BMI calculator" 
    puts "[t] - Trip calculator"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition! Input the numbers you want to add."
        def addition
            n1 = gets.to_i
            n2 = gets.to_i
            result = n1 + n2
            puts "The result is #{result}"
        end
        addition 
    #add more 'when' clauses for subtract, multiply, etc
    when 'x'
        puts "You chose multiplication! Input the numbers you want to multiply."
        def multiplication
            n1 = gets.to_i
            n2 = gets.to_i
            result = n1 * n2
            puts "The result is #{result}"
        end
        multiplication
    when 'd'
        puts "You chose division! Input the numbers you want to divide."
        def division
            n1 = gets.to_i
            n2 = gets.to_i
            result = n1 / n2
            puts "The result is #{result}"
        end
        division
    when 'e'
        puts "You chose exponention! Input the number you want to exponate."
        def exponention
            n1 = gets.to_i
            n2 = gets.to_i
            result = n1 ** n2
            puts "The result is #{result}"
        end
        exponention
    when 's'
        puts "You chose square root! Input the number you want to root."
        def square
            n1 = gets.to_i
            puts "The result is #{Math.sqrt(n1)}"
        end
        square
    when 'b'
        puts "You chose the BMI calculator!"
        def bmi
            print "Enter your weight in kgs: "
            weight = gets.to_f
            print "Enter your height in meters: "
            height = gets.to_f
            result = weight / (height ** 2)
            puts "Your BMI is #{result}"
        end
        bmi
    when 'm'
        puts "You chose the mortgage calculator! Input the principle of the loan, the monthly interest rate, and the number of repayments to calculate your monthly repayment."
        def mortgage
            print "Enter the priniple of the loan: "
            p = gets.to_f
            print "Enter the monthly interest rate: "
            i = gets.to_f
            print "Enter the number of repayments: "
            n = gets.to_f
            m = p * ((i * (1 + i) ** n) / ((1 + i) ** n - 1))
            puts "Your monthly repayment is #{m}"
        end
        mortgage
    when 't'
        puts "You chose the trip calculator!"
        def trip
            print "Enter the distance in kilometres: "
            kms = gets.to_f
            print "Enter the kilometres per litre: "
            kpl = gets.to_f
            print "Enter the price per litre of petrol: "
            ppl = gets.to_f
            print "Enter the speed in kilometres per hour: "
            kmh = gets.to_f
            time = kms / kmh
            cost = (kms / kpl) * ppl
            puts "The trip time will be #{time} hours and the cost will be $#{cost}"
        end
        trip
    else 
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"