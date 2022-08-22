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

    start_line_array = lines[start_line]
    dest_line_array = lines[dest_line];
    start_stop_index = start_line_array.index start_stop;
    same_dest_stop_index = start_line_array.index dest_stop;
    diff_dest_stop_index = dest_line_array.index dest_stop;

    start_line_us_index = start_line_array.index 'Union Square'
    dest_line_us_index = dest_line_array.index 'Union Square'

    first_message = "You must travel through the following stops on the #{start_line} line: "
    second_message = "Your journey continues through the following stops: "
    change_at_us = "Change at Union Square."

    same_line_stops_a = start_line_array[start_stop_index + 1 .. same_dest_stop_index]
    same_line_stops_b = start_line_array[same_dest_stop_index .. start_stop_index -1]
    first_stops_a = start_line_array[start_stop_index + 1 .. start_line_us_index]
    first_stops_b = start_line_array[start_line_us_index .. start_stop_index - 1]
    second_stops_a = dest_line_array[dest_line_us_index + 1 .. diff_dest_stop_index]
    second_stops_b = dest_line_array[diff_dest_stop_index .. dest_line_us_index - 1]
    stops_total = 0;

    if start_line == dest_line
        if start_stop_index < same_dest_stop_index
            puts "#{first_message + same_line_stops_a.join(', ')}."
            stops_total += same_line_stops_a.size
        else
            puts "#{first_message + same_line_stops_b.reverse.join(', ')}."
            stops_total += same_line_stops_b.size
        end
    else
        if start_stop_index < start_line_us_index
            puts "#{first_message + first_stops_a.join(', ')}."
            puts change_at_us
            stops_total += first_stops_a.size
        else
            puts "#{first_message + first_stops_b.reverse.join(', ')}."
            puts change_at_us
            stops_total += first_stops_b.size
        end
        if dest_line_us_index < diff_dest_stop_index
            puts "#{second_message + second_stops_a.join(', ')}."
            stops_total += second_stops_a.length
        else
            puts "#{second_message + second_stops_b.reverse.join(', ')}."
            stops_total += second_stops_b.length
        end
    end
    puts "#{stops_total} stops in total."
end

plan_trip

# lines["L"].