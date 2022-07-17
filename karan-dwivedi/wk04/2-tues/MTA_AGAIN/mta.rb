
# Create a program that models a simple subway system.



# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.


# There are 3 subway lines:
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."


# train_lines = {
# "N" => {
#     :stops => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th_n'],
# },
# "L" => {
#     :stops => ['8th', '6th', 'Union Square', '3rd', '1st'],
# },
# "6" => {
#     :stops => ['Grand Central', '33rd', '28th_6', '23rd_6', 'Union Square', 'Astor Place'],
# },

# }

# p train_lines["N"][:stops].index('Times Square')


def userJourney()
train_lines = {
"N" => {
    :stops => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th_n'],
},
"L" => {
    :stops => ['8th', '6th', 'Union Square', '3rd', '1st'],
},
"6" => {
    :stops => ['Grand Central', '33rd', '28th_6', '23rd_6', 'Union Square', 'Astor Place'],
},
}
# Steps to find total stops on the same line
puts "enter your stop on"
stop_on = gets.chomp
puts "enter your line on"
line_on = gets.chomp
puts "enter your stop off"
stop_off = gets.chomp
puts "enter your line off"
line_off = gets.chomp
a = "You travel"
b = "stops"
total_stops = (train_lines[line_on][:stops].index(stop_on) - train_lines[line_off][:stops].index(stop_off)).abs
puts "You travel #{total_stops} stops"
index_of_stop_on = train_lines[line_on][:stops].index(stop_on)
# p index_of_stop_on
index_of_stop_off = train_lines[line_on][:stops].index(stop_off)
# p index_of_stop_off
journey_stops = train_lines[line_on][:stops][index_of_stop_on..index_of_stop_off]
journey_stops_backwards = train_lines[line_on][:stops][index_of_stop_off..index_of_stop_on]
journey_stops_backwards_reversed = journey_stops_backwards.reverse
journey_stop_string = journey_stops.join(", ")
journey_stops_backwards_string = journey_stops_backwards_reversed.join(", ")

if line_on == line_off && index_of_stop_on<index_of_stop_off
puts "You travel through #{journey_stop_string} "

elsif line_on == line_off && index_of_stop_on > index_of_stop_off
    puts "You travel through #{journey_stops_backwards_string} "


end 
end

userJourney()


