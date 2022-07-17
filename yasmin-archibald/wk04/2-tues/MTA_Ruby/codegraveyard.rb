require 'pry' #this is your scripts src :)

lines = { "nLine" => { :stops => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],} }

## to access nLine stops : lines["nLine"][:stops]

## index of starting and ending staton : lines["nLine"][:stops].index("Union Square")

# to access the stops between stops on the line : lines["nLine"][:stops][4..5]

# start station and end station

# 8th "Times Square"

## lines["nLine"][:stops].reverse[0..5] output = ["8th", "Union Square", "23rd", "28th", "34th", "Times Square"] - yay

##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//
def my_trip
    puts "Welcome to My Trip"
    puts "Please select from the following menu"
    puts "[2] - Line Trip"
    puts "[1] - 1 Line Trip"
    puts "[Q] - Quit"
end

my_trip
trip_choice = gets.chomp.downcase
until trip_choice == 'q'
    case trip_choice
when '1'
    puts "Enter your starting stop. : "
    starting = gets.split.map(&:capitalize).join(" ")
    puts "Enter your final stop. : "
    final = gets.split.map(&:capitalize).join(" ")
    starting_index = lines["nLine"][:stops].index(starting)
    final_index = lines["nLine"][:stops].index(final)
if final_index > starting_index
reverse_line_stops = lines["nLine"][:stops].reverse
reverse_starting_index = reverse_line_stops.index(starting)
reverse_final_index = reverse_line_stops.index(final)
    if reverse_starting_index = (reverse_final_index + 1)
        puts "Get on at #{starting}, depart at your next stop #{final}"
    else
    puts "Get on #{starting} traveling through #{reverse_line_stops[reverse_starting_index+1...reverse_final_index]} depart at #{final}"
    end

else
    if starting_index = (final_index+1)
        puts "Get on #{starting}, depart at your next stop #{final}"
    else
    puts "Get on #{starting} traveling through #{lines["nLine"][:stops][starting_index+1..final_index-1]} depart at #{final}"
    end
end
when '2'
    puts "Coming Soon"
else
    puts "Invalid Selection"
end
    my_trip
    trip_choice = gets.chomp.downcase
end


 binding.pry 


#=====================================================#
###############DEADCODE2#############################
require 'pry' #this is your scripts src :)

Lines = { "nLine" => { :stops => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],} }

## to access nLine stops : Lines["nLine"][:stops]

## index of starting and ending staton : Lines["nLine"][:stops].index("Union Square")

# to access the stops between stops on the line : Lines["nLine"][:stops][4..5]

# start station and end station

# 8th "Times Square"

## Lines["nLine"][:stops].reverse[0..5] output = ["8th", "Union Square", "23rd", "28th", "34th", "Times Square"] - yay

##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//

def one_line_trip 
    puts "Enter your starting stop. : "
    starting = gets.split.map(&:capitalize).join(" ")
    puts "Enter your final stop. More Lines coming soon: "
    final = gets.split.map(&:capitalize).join(" ")
    starting_index = Lines["nLine"][:stops].index(starting)
    p starting_index = Lines["nLine"][:stops].index(starting)
    final_index = Lines["nLine"][:stops].index(final)
    p final_index = Lines["nLine"][:stops].index(final)
if final_index > starting_index
    p "final_index < starting_index"
reverse_line_stops = Lines["nLine"][:stops].reverse
reverse_starting_index = reverse_line_stops.index(starting)
reverse_final_index = reverse_line_stops.index(final)
    if reverse_starting_index = (reverse_final_index + 1)
        p reverse_starting_index = (reverse_final_index + 1)
        puts "Get on at #{starting}, depart at your next stop #{final}"
    else
        puts "else 1"
    puts "Get on #{starting} traveling through #{reverse_line_stops[reverse_starting_index+1...reverse_final_index]} depart at #{final}"
    end
elsif final_index > starting_index  
    puts "else 2"
    if starting_index = (final_index+1) || (starting_index = 0 && final_index = 1)
        puts "starting_index = (final_index+1)"
        puts "Get on #{starting}, depart at your next stop #{final}"
    else
    puts "Get on #{starting} traveling through #{Lines["nLine"][:stops][starting_index+1..final_index-1]} depart at #{final}"
    puts "this is the goal rly"
    end
end
my_trip
trip_choice = gets.chomp.downcase
end

def two_Line_Trip 
    puts "What is the train line you begin on: "
    puts "[N] - Nline"
    puts "[L] - Lline"
    puts "[6] - 6line"
    starting_line = gets.chomp.downcase
    puts "What is the train line you end on: "
    final_line = gets.chomp.downcase
end

def my_trip
    puts "Welcome to My Trip"
    puts "Please select from the following menu"
    puts "[2] - Line Trip"
    puts "[1] - 1 Line Trip"
    puts "[Q] - Quit"
end


my_trip
trip_choice = gets.chomp.downcase

until trip_choice == 'q'
    case trip_choice
    when '1'
        one_line_trip
    when '2'
        two_Line_Trip
else
    puts "Invalid Selection"
end
trip_choice
trip_choice = gets.chomp.downcase
end 

 binding.pry  