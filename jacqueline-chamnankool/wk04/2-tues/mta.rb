def plan_trip(start_line, start_station, end_line, end_station)
    puts "-" * 100
    first_journey_msg = "You must travel through the following stops on the #{start_line} line: "
    transfer_msg = "Change at Union Square."
    second_journey_msg = "Your journey continues through the following stops: "

    # same line
    no_transfer = same_line? start_line, end_line
    # establish starting and ending train lines
    start_line = get_train_line start_line
    end_line = get_train_line end_line

    # get station positions
    start_station_index = start_line.index(start_station)
    end_station_index = end_line.index(end_station)
    start_station_position = start_station_index + 1
    end_station_position = end_station_index + 1
    # get union square specifically
    start_union_index = get_union_square start_line
    end_union_index = get_union_square end_line
    start_union_position = start_union_index + 1
    end_union_position = end_union_index + 1

    # keeping track of stops
    total_stations_traveled = 0
    num_stations_to_travel = get_num_stations_to_travel start_station_position, end_station_position
    stations_traveled = []

   # check if user needs to transfer in the first place
    if no_transfer
        stations_traveled = travel start_line, start_station_position, end_station_position, num_stations_to_travel
        first_journey_msg += print_stations_traveled stations_traveled
        total_stations_traveled += stations_traveled.length

        puts first_journey_msg
    else
        # from start station to union sq
        num_stations_to_travel = get_num_stations_to_travel start_station_position, start_union_position
        stations_traveled = travel start_line, start_station_position, start_union_position, num_stations_to_travel
        first_journey_msg += print_stations_traveled stations_traveled
        total_stations_traveled += stations_traveled.length
        #from union sq to end station
        num_stations_to_travel = get_num_stations_to_travel end_union_position, end_station_position
        stations_traveled = travel end_line, end_union_position, end_station_position, num_stations_to_travel
        second_journey_msg += print_stations_traveled stations_traveled
        total_stations_traveled += stations_traveled.length

        puts first_journey_msg
        puts transfer_msg
        puts second_journey_msg
    end

    puts "#{total_stations_traveled} stops in total."
end

def get_train_line (line_name)
    line_N = ["Broadway", "Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
    line_L = ["8th", "6th", "Union Square", "3rd", "1st"]
    line_six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

    # links the corresponding stations with its train line
    train_lines = {
        "N" => line_N,
        "L" => line_L,
        "6" => line_six
    }

    return train_lines[line_name]
end

def get_union_square (stations)
    stations.each{ |station| return stations.index(station) if station == "Union Square"}
end

def same_line? (start_line, end_line)
    start_line == end_line
end

def determine_direction (start_position, end_position)
    if start_position < end_position
        return "forward"
    else
        return "backwards"
    end
end

def get_num_stations_to_travel (start_position, end_position)
    (end_position - start_position).abs
end

def travel (start_line, start_station_position, end_station_position, num_stations_to_travel)
    direction = determine_direction start_station_position, end_station_position
    stations_traveled = []

    while num_stations_to_travel > 0
        if (direction == "forward")
            stations_traveled << start_line[start_station_position]
            start_station_position += 1
        else
            start_station_position -= 1
            stations_traveled << start_line[start_station_position-1]
        end

        num_stations_to_travel -= 1
    end

    return stations_traveled
end

def print_stations_traveled (stations_traveled)
    list = ""

    stations_traveled.each_with_index do |station, index|
        list += station

        if index != stations_traveled.length-1
            list += ", "
        else
            list += "."
        end
    end

    return list
end

# RESULTS
# same line, going forward
plan_trip "N", "Times Square", "N", "23rd" # => 3 stops total
# same line, going backwards
plan_trip "N", "8th", "N", "34th"  # => 4 stops total
# different line, going forward to union sq , then backward (homework example)
plan_trip "N", "Times Square", "6", "33rd" # => 7 stops total
# different line, going forward to union sq , then forward
plan_trip "6", "Grand Central", "L", "1st" # => 6 stops total
# different line, going backwards to union sq first, then forward
plan_trip "L", "1st", "6", "Astor Place" # => 3 stops total
# different line, going backwards to union sq first, then backward
plan_trip "L", "1st", "6", "Grand Central" # => 6 stops total
# me going home :)
plan_trip "6", "Grand Central", "N", "Broadway" # => 9 stops total