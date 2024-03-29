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

def show_menu
    puts "Calculator" #TODO: check out .center to make this look nicer
    puts "//|\\~\\|//" * 22 # Budget horizontal dividing line
    puts "[a] = Addition"
    puts "[s] = Subtraction"
    puts "[m] = Multiply"
    puts "[d] = Divide"
    puts "[q] = Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "Actual addition coming soon" # TODO: actually do the actual addition, somehow
        # add more `when` clauses for subtract, multiply etc
    else 
        puts "Invalid selection. You dummy! XD"
    end

    show_menu
    menu_choice = gets.chomp.downcase
end

puts "Thanks for using this crappy calculator :)"


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



