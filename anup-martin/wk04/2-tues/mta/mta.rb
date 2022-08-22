# # MTA Lab

# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.

# #### Activity
# * Create a program that models a simple subway system.

# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.

# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

###########################################################################################################################
require 'pry'


# p lines
# p lines["N"]
# p lines["L"]
# p lines["6"]



def plan_trip (line1, stop1, line2, stop2)

    lines = {
    "N" => %w(Times\ Square 34th 28th 23rd Union\ Square 8th),
    "L" => %w(8th 6th Union\ Square 3rd 1st),
    "6" => %w(Grand\ Central 33rd 28th 23rd Union\ Square Astor\ Place)
    }

    first_line = lines[line1]
    first_line.reverse! if first_line.index(stop1) > first_line.index("Union Square") 
    line1_stops = first_line.slice( first_line.index(stop1) + 1..first_line.index("Union Square") ).join(', ')
    puts "You must travel through the following stops on the #{ line1 } line: #{ line1_stops }"

    puts "Change at Union Square." if line1 != line2

    second_line = lines[line2]
    second_line.reverse! if second_line.index(stop2) < second_line.index("Union Square") 
    line2_stops = second_line.slice( second_line.index("Union Square") + 1..second_line.index(stop2) ).join(', ')
    puts "Your journey continues through the following stops on the #{ line2 } line: #{ line2_stops }"

    num_stops = ( first_line.index(stop1) - first_line.index("Union Square") ).abs + ( second_line.index(stop2) - second_line.index("Union Square") ).abs
    puts "#{ num_stops } stops in total."

end

plan_trip 'N', 'Times Square', '6', '33rd'
plan_trip 'N', 'Times Square', 'N', '8th'
plan_trip 'N', '8th', 'N', 'Times Square'



# please make me understand these lines of code.
# How does .abs come into picture in line 70.
# Where is the code for the 3rd line thats stated in line 55 ( if the user need to travel in that line)
# Please explain code in lines from 70 and 71