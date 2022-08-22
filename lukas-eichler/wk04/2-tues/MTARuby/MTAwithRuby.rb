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



train_lines_hash =  {
  "Line N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "Line L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "Line 6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

starting_point_index = train_lines_hash[starting_line].index starting_point
union_square_first_line_index = train_lines_hash[starting_line].index "Union Square"

final_point_index = train_lines_hash[second_line].index final_point
union_square_second_line_index = train_lines_hash[second_line].index "Union Square"

if starting_point_index < union_square_first_line_index
    trip_on_first_line = train_lines_hash[starting_line][starting_point_index..union_square_first_line_index]

    if final_point_index > union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!
    else trip_on_second_line = ["Nothing, you are lucky!"]
    end


elsif starting_point_index > union_square_first_line_index
    trip_on_first_line = train_lines_hash[starting_line][union_square_first_line_index..starting_point_index]
    trip_on_first_line.reverse!

    if final_point_index > union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][union_square_second_line_index..final_point_index]

    elsif final_point_index < union_square_second_line_index
        trip_on_second_line = train_lines_hash[second_line][final_point_index..union_square_second_line_index]
        trip_on_second_line.reverse!
    else trip_on_second_line = ["Nothing, you are lucky!"]
    end
    end

    if starting_point == "Union Square" && final_point == "Union Square"
        puts trip_on_first_line
        puts trip_on_second_line



# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)