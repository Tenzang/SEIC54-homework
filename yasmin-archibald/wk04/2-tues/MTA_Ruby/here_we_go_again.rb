require 'pry' #this is your scripts src :)

lines = { "nLine" => { :stops => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]}, "lLine" => {:stops => ["8th", "6th", "Union Square", "3rd", "1st"]}, "6Line" => {:stops => ["Grand Central," "33rd", "28th", "23rd", "Union Square", "Astor Place"]}}
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
def my_trip
    puts "Welcome to My Trip"
    puts "Please select from the following menu"
    puts "[1] - 1 Line Trip"
    puts "[2] - Line Trip"
    puts "[Q] - Quit"
end
my_trip
trip_choice = gets.chomp.downcase

until trip_choice == 'q'
    case trip_choice
##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//
    when "1"
            puts "Enter your line"
            line = gets.chomp ## worry about capitalisation etc later..
            puts "Enter your starting stop : "
            starting = gets.split.map(&:capitalize).join(" ")
        
            puts "Enter your final stop: "
            final = gets.split.map(&:capitalize).join(" ")
            ##index
            starting_index = lines[line][:stops].index(starting)
            final_index = lines[line][:stops].index(final)
            ##backwards trip ## more like broken trip
            if final_index < starting_index
            reverse_line_stops = lines[line][:stops].reverse
            reverse_starting_index = reverse_line_stops.index(starting)
            reverse_final_index = reverse_line_stops.index(final)
            puts "Get on #{starting} traveling through #{reverse_line_stops[reverse_starting_index...reverse_final_index]} depart at #{final}"
            else ##forwards trip
            puts "Get on #{starting} traveling through #{lines[line][:stops][starting_index...final_index]} depart at #{final}"
            end
    when "2"
            def first_trip(lines)
                puts "Enter your line"
                line = gets.chomp ## worry about capitalisation etc later..
                puts "Enter your starting stop : "
                starting = gets.split.map(&:capitalize).join(" ")
                ##index
                starting_index = lines[line][:stops].index(starting)
                final_index = lines[line][:stops].index("Union Square")
                ##backwards trip
                if final_index < starting_index
                reverse_line_stops = lines[line][:stops].reverse
                reverse_starting_index = reverse_line_stops.index(starting)
                reverse_final_index = reverse_line_stops.index(Union Square)
                puts "Get on #{starting} traveling through #{reverse_line_stops[reverse_starting_index...reverse_final_index]} depart at Union Square"
                else ##forwards trip
                puts "Get on #{starting} traveling through #{lines[line][:stops][starting_index...final_index]} depart at Union Square"
                end
            end
            def second_trip (lines)
                puts "Enter your second line"
                line = gets.chomp ## worry about capitalisation etc later..
                puts "Enter your final stop : "
                final = gets.split.map(&:capitalize).join(" ")
                ##index
                starting_index = lines[line][:stops].index("Union Square")
                final_index = lines[line][:stops].index(final)
                ##backwards trip
                if final_index < starting_index
                reverse_line_stops = lines[line][:stops].reverse
                reverse_starting_index = reverse_line_stops.index("Union Square")
                reverse_final_index = reverse_line_stops.index(final)
                puts "Get on Union Square traveling through #{reverse_line_stops[reverse_starting_index...reverse_final_index]} depart at #{final}"
                else ##forwards trip
                puts "Get on Union Square traveling through #{lines[line][:stops][starting_index...final_index]} depart at #{final}"
                end
            end
            first_trip(lines)
            second_trip(lines)
    else puts "Invalid choice, invalid lifeform"
    end
my_trip
trip_choice = gets.chomp.downcase
end

 binding.pry  

 ## cases
 # works! All single line trips forward and back ## Not anymore!! 

 # works double line going forwards each way! e.g. 6Line 23rd nLine 28th


 # broke lLine 8th to 6Line Grand Central, something gets funky when one is forward and one is backward .. odd because it was working fine when I had two lines but not three.
 