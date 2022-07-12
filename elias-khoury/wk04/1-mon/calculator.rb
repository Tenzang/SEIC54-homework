def show_menu
    puts "calculator" #TODO: check out .center to make this look nicer"
    puts "=-" * 40 #budget horizontal line
    puts "[+] - Addition"
    puts "[*] - Multiple"
    puts "[/] - divide"
    puts "[-] - minus"
    puts "[^] - exponent"
    puts "[m] - Mortgage repayment calculator"
    puts "[bmi] - Body mass index calculator"
    puts "[q] - Quit"
    puts "[trip] - trip time and cost"
    print "enter your operator: "
end

show_menu
menu_choice = gets.chomp.downcase


until menu_choice == 'q'
    case menu_choice
    when '+'
        print "value1: "
        num1 = gets.to_i
        print "value2: "
        num2 = gets.to_i
        puts num1 + num2
    when '-'
        print "value1: "
        num1 = gets.to_i
        print "value2: "
        num2 = gets.to_i
        puts num1 - num2
    when '*'
        print "value1: "
        num1 = gets.to_i
        print "value2: "
        num2 = gets.to_i
        puts num1 * num2
    when '/'
        print "value1: "
        num1 = gets.to_i
        print "value2: "
        num2 = gets.to_i
        puts num1 / num2
    when '/'
        print "value1: "
        num1 = gets.to_i
        print "value2: "
        num2 = gets.to_i
        puts num1 + num2
    when '^'
        print "value1: "
        num1 = gets.to_i
        print "value2: "
        num2 = gets.to_i
        puts num1 ** num2
    when 'm'
        print "Loan amout: "
        num1 = gets.to_i
        print "Total monthly term: "
        num2 = gets.to_i
        net = num1 * (0.0641 * (1 + 0.0641) ** num2) / (( 1 + 0.0641 ) ** num2 -1)
        puts "You will pay #{net} every month for #{num2} months"
    when 'bmi'
        print "weight(kg): "
        num1 = gets.to_i
        print "height(meters): "
        num2 = gets.to_f
        net = num1 / num2 ** 2
        puts "Your BMI is #{net}"
    when 'trip'
        print "distance(km): "
        num1 = gets.to_f
        print "speed(km/h): "
        num2 = gets.to_f
        time = num1 / num2
        print "Enter KM per litre car type: "
        num3 = gets.to_f
        print "Current petrol price is $1.5/L"
        cost = num1 / num3 * 1.5
        puts "it will take #{time} hours and cost $#{cost}."
    else 
        puts "invalid selection, idiotaa."
    end

    show_menu
    menu_choice = gets.chomp.downcase

end

puts "thanks for using this crappy calculator"