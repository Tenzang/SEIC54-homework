# # Calculator

# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)

# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)



# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

def show_menu
    puts "Calculator" # TODO: check out .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line
    puts "[a] - Addition"
    puts "[s] - Subtract"
    puts "[m] - Multiply"
    puts "[d] - Divide"
    puts "[e] - Exponent"
    puts "[r] - Square [R]oot"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

num_1 = 0
num_2 = 0

###########################################################################
def nums
    print "Choose first number: "
    num_1 = gets.to_i
    print "Choose second number: "
    num_2 = gets.to_i
end

def add
    nums
    puts "#{ num_1 }"
    # puts "#{ num_1 } + #{ num_2 } = #{ ans }"
end

# CANT MAKE THIS up there - this doesnt work
###########################################################################

def subtract
    print "Choose first number: "
    num_1 = gets.to_i
    print "Choose second number: "
    num_2 = gets.to_i
    puts num_1 - num_2
end

def multiply
    print "Choose first number: "
    num_1 = gets.to_i
    print "Choose second number: "
    num_2 = gets.to_i
    puts num_1 * num_2
end

def divide
    print "Choose first number: "
    num_1 = gets.to_i
    print "Choose second number: "
    num_2 = gets.to_i
    puts num_1/num_2.to_f
end

def exponential
    print "Choose base number: "
    num_1 = gets.to_i
    print "Choose exponent number: "
    num_2 = gets.to_i
    puts num_1**num_2
end

def sq_root
    print "Choose number: "
    num_1 = gets.to_i
    puts num_1**0.5
end

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        add 
    when 's'
        puts "You chose subtract!"
        subtract 
    when 'm'
        puts "You chose multiply!"
        multiply
    when 'd'
        puts "You chose divide!"
        divide
    when 'e'
        puts "You chose exponential!"
        exponential
    when 'r'
        puts "You chose square root!"
        sq_root
    else
        puts "Invalid selection. You idiot."
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator"