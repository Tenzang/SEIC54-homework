def plan_trip # start_line, start_stop, dest_line, dest_stop
    print "Welcome to the MTA. Please enter your starting line: "
    start_line = gets.chomp 
    print "Please enter your starting stop: "
    start_stop = gets.chomp 
    print "Please enter your destination line: "
    dest_line = gets.chomp 
    print "Please enter your destination stop: "
    dest_stop = gets.chomp

    lines = {
    "L" => ['1st', '3rd', 'Union Square', '6th', '8th'],
    "6" => ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central'],
    "N" => ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square']
    }

    first_message = "You must travel through the following stops on the #{start_line} line: "
    second_message = "Your journey continues through the following stops: "
    change_at_us = "Change at Union Square."

    start_line_array = lines[start_line]
    dest_line_array = lines[dest_line]
    start_line_stop = start_line_array.index start_stop
    dest_line_stop = dest_line_array.index dest_stop


    puts first_message + start_line[start_line_stop .. dest_line_stop]
    p dest_line_array.index dest_stop
end

plan_trip