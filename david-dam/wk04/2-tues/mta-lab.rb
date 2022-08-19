require 'pry'

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

n = ['Times Square','34th','28th', 'Union Square', '8th']
l = ['8th','6th','Union Square','3rd','1st']
six = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']

# def show_start
#     puts "N line - Times Square, 34th, 28th, 23rd, Union Square, and 8th"
#     puts "L line - 8th, 6th, Union Square, 3rd, and 1st"
#     puts "6 line - Grand Central, 33rd, 28th, 23rd, [Union Square], and Astor Place."

#     puts "Enter your start line then your starting station: "
# end

# def show_end
#     puts "N line - Times Square, 34th, 28th, 23rd, Union Square, and 8th"
#     puts "L line - 8th, 6th, Union Square, 3rd, and 1st"
#     puts "6 line - Grand Central, 33rd, 28th, 23rd, [Union Square], and Astor Place."

#     puts "Enter your destination line then your station: "
# end

# show_start
# start_line = gets.chomp
# start_station = gets.chomp
# show_end
# end_line = gets.chomp
# end_station = gets.chomp
# puts "From #{ start_line } line, #{ start_station } to #{ end_line } line, #{ end_station }" #<=== making sure these variables outputs

# will need line_start/line_end later on
# will need to convert station input to strings (gets.to_s)
def plan_trip (line_start,station_start,line_end,station_end)
    # travel = []
    stop_a = line_start.index(station_start)
    stop_b = line_end.index(station_end)
    stop_total = stop_a + stop_b

    if (stop_a < stop_b) #trying to get a reverse travel stops working
        stops_r = line_start[stop_b..stop_a].reverse.join(', ')
        puts "Stopping at #{ stops_r }"
    end

    stops = line_start[stop_a..stop_b].join(', ')
    puts "Stopping at #{ stops }"
    puts "#{ stop_total } stops in total"
end

# so far total number of stops and telling stops from left > right is working cannot reverse yet

# interchanges at union square
def union_square (line_start,line_end)
    if (line_start != line_end)
        return "change at union square"
    else
        return false
    end
end

binding.pry

# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, [Union Square], and 8th
#   * The L line has the following stops: 8th, 6th, [Union Square], 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, [Union Square], and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)