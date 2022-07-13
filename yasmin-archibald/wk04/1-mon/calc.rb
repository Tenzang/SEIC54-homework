def show_menu
    puts "Calculator" #todoL check out .center to make this look nicer
    puts "-=" * 40 #Budget horizontal dividing line
    puts "[a] - Addition" 
    puts "[s] - Subtraction" 
    #TODO add the other operations here (multiply divide subtract)
    puts '[m] - Multiplication'
    puts '[d] - Division'
    puts '[p] - to the Power'
    puts "[sqr] - Square Root"
    puts "[f] - Factorial"
    puts "[hl] - Home-Loan"
    puts "[bmi] - BMI ):"
    puts "[trip] - Trip Cost :)"
    puts "[q] - Quit"
    print "Enter your choice "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
   when 'a'
    puts "You chose addition!"
    puts "What's the first number you would you like to add: "
    a = gets.to_i
    puts "What's the number you'd like to add #{a} to: "
    b = gets.to_i
    puts "#{a} + #{b} = #{a+b}"
   when 's'
    puts "You chose subtraction!"
    puts "Enter the first number you'd like to subtract: "
    a = gets.to_i
    puts "What's the number you'd like to subtract #{a} from: "
    b = gets.to_i
    puts "#{a} - #{b} = #{a-b}"
   when 'm'
    puts "You chose multiplication!"
    puts "Enter the first number you'd like to multiply: "
    a = gets.to_i
    puts "What's the number you'd like to multiply #{a} by: "
    b = gets.to_i
    puts "#{a} x #{b} = #{a*b}"
   when 'd'
    puts "You chose division!"
    puts "Enter the first number you'd like to divide: "
    a = gets.to_i
    puts "What's the number you'd like to divide #{a} by: "
    b = gets.to_i
    puts "#{a} / #{b} = #{a/b}"
   when 'sqr'
    puts "You chose square root!"
    puts "Enter the number you'd like to square root: "
    a = gets.to_i
    asqrt = Math.sqrt(a)
    puts "√#{a} = #{asqrt}"
   when 'p'
    puts 'You chose to the Power'
    puts 'Enter the first number: '
    a = gets.to_i
    puts "Enter the number you'd like #{a} to the power of: "
    b = gets.to_i
    puts "#{a} to the power of #{b} = #{a**b}"
   when 'f'
    puts 'You chose factorial'
    puts "Enter the number you'd like the factorial of"
    a = gets.to_i
    fact = 1
    if a == 0
        puts "The factorial of 0 is 1"
    else 
        i=1
        while(i <= a)
            fact = fact * i
            i+=1
        end
    end
    puts "The factorial of #{a} is #{fact}"
when 'hl'
    puts 'You chose home-loan'
    puts 'Enter the loan amount: '
    loan = gets.to_i
    puts 'Enter the length of time in months: '
    months = gets.to_i
    puts 'Enter the interest rate: '
    irate = gets.to_f/100
    i = (1+irate/12)**(12/12)-1
    annuity = (1-(1/(1+i))**months)/i
    payment = loan/annuity
    puts "\n$%.2f per month" % [payment]
when 'bmi'
    puts "You chose BMI"
    puts 'Enter your height (cms): '
    height **= gets_to_f/100
    puts "Enter your wight (kgs): "
    weight = gets.to_i
    puts "your bmi is #{weight/height}"
when 'trip'
    puts 'You chose trip cost'
    puts 'Enter distance in km: '
    d = gets.to_i
    puts 'Enter km per litre: '
    l = gets.to_f
    puts 'Enter price per litre: $'
    ppl = gets.to_f
    puts 'Speed in km/p/h: '
    # sph = gets.to_i ##??
    litres_total = d/l
    fuelCostTotal = litres_total * ppl
    puts "Your total cost is $#{fuelCostTotal.to_i}"
else 
    puts 'invalid selection DUMMY'

end
show_menu
menu_choice = gets.chomp.downcase
end
