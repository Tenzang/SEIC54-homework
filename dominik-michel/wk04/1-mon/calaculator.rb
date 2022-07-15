def show_menu
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    # TODO: add the other operations here (multiply, divide, subtract)
    puts "[s] -subtact"
    puts "[m] - muiltiply"
    puts "[d] -divide"
    puts "[e] - expo"
    puts "[r] -root"
    puts "[mo] -mortgage"
    puts "[bmi] -bmi"
    puts "[tp] - tripCalculator"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  
    case menu_choice
   
    when 's'
        print "which number do want to use?"
        num1=gets.to_i
        print "which other number do you wanna use?"
        num2 = gets.to_i
        result0=num1 - num2
        puts result0
    
    when 'm'
        print "which number do want to use?"
        num1=gets.to_i
        print "which other number do you wanna use?"
        num2 = gets.to_i
        result1 = num1 *num2
        puts result1
   
    when 'd'
        print "which number do want to use?"
        num1=gets.to_i
        print "which other number do you wanna use?"
        num2 = gets.to_i
        result2 = num1/num2
        puts result2
   
    when 'a'
        print "which number do want to use?"
        num1=gets.to_i
        print "which other number do you wanna use?"
        num2 = gets.to_i
        result3= num1+num2
        puts result3
   
    when 'r'
        print "which number do want to use?"
        num1=gets.to_i
        puts Math.sqrt(num1)
   
    when 'e'
        print "which number do want to use?"
        num1=gets.to_i
        puts Math.exp(num1)
   
    when 'mo'
        print "How much was the propery?"
        num1=gets.to_i
        print "what % do have to pay"
        num2 = gets.to_f
        num5 =num2 /100
        print "How many years will you be paying it off?"
        num3=gets.to_i
        num4=num3*12
        i= (1+num5/12)**(12/12)-1
        annuity = (1-(1/(1+i))**num4)/i 
        payment =num1/annuity
        puts payment
   
    when 'bmi'
        print "How heavy are you?"
        num1=gets.to_i
        print "whats your hight?"
        num2 = gets.to_f
        sum= num1 / num2 **2
        puts sum
    when 'tp'
        print "How many KM's?"
        num1=gets.to_i
        print "Km/L"
        num2 = gets.to_i
        print "How much $ per L?"
        num3=gets.to_i
        print "Km/hr"
        num4 = gets.to_i

        time= num1 / num4
        price = num1 / num2 * num3
        puts "#{num1}km's will cost you #{price}$ and it takes #{time}hr's"

    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"
