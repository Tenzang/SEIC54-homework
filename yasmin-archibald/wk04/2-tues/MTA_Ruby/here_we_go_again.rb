require 'pry' #this is your scripts src :)

lines = { "nLine" => { :stops => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],}, "lLine" => {:stops => ["8th", "6th", "Union Square", "3rd", "1st"]}, }

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
            puts "Enter your starting stop. : "
            starting = gets.split.map(&:capitalize).join(" ")
        
            puts "Enter your final stop. More lines coming soon: "
            final = gets.split.map(&:capitalize).join(" ")
            ##index
            starting_index = lines[line][:stops].index(starting)
            final_index = lines[line][:stops].index(final)
            ##backwards trip
            if final_index < starting_index
            reverse_line_stops = lines[line][:stops].reverse
            reverse_starting_index = reverse_line_stops.index(starting)
            reverse_final_index = reverse_line_stops.index(final)
            puts "Get on #{starting} traveling through #{reverse_line_stops[reverse_starting_index...reverse_final_index]} depart at #{final}"
            else ##forwards trip
            puts "Get on #{starting} traveling through #{lines[line][:stops][starting_index...final_index]} depart at #{final}"
            end
            when "2"
                puts "Enter first line: "
                first_line = gets.chomp ## worry about capitalisation etc later
                puts "Enter first station: "
                starting = gets.split.map(&:capitalize).join(" ")
                puts "Enter second line: "
                second_line = gets.chomp ## worry about capitalisation etc later
                puts "Enter last station: "
                final = gets.split.map(&:capitalize).join(" ")
                ##index
                starting_index = lines[first_line][:stops].index(starting)
                final_index = lines[second_line][:stops].index(final)
                ## Union Sq index's
                first_USR_index = lines[first_line][:stops].index("Union Square")
                second_USR_index = lines[second_line][:stops].index("Union Square")
                puts "Your trips are as follows"
                if first_USR_index < starting_index && second_USR_index < final_index ##backward trip 1st half ## forward trip 2nd half
                    reverse_line_stops = lines[first_line][:stops].reverse
                    reverse_starting_index = reverse_line_stops.index(starting)
                    reverse_USR_index = reverse_line_stops.index("Union Square")
                    puts "Get on #{starting} traveling through #{reverse_line_stops[reverse_starting_index...reverse_USR_index]} change at Union Square"
                    puts "Get on at Union Square traveling through #{lines[second_line][:stops][second_USR_index...final_index]} change at Union Square"
                    # puts "Your trip on #{first_line} #{first_half}."
                elsif first_USR_index > starting_index && second_USR_index > final_index ##forwards trip first half ##backward trip 2nd half
                     puts first_half = "Get on #{starting} traveling through #{lines[first_line][:stops][starting_index...first_USR_index]} change at Union Square"
                     reverse_line_stops = lines[second_line][:stops].reverse
                    reverse_final_index = reverse_line_stops.index(final)
                    reverse_USR_index = reverse_line_stops.index("Union Square")
                    puts "Get on at Union Square travele through #{reverse_line_stops[reverse_USR_index...reverse_final_index]} change at Union Square"
                    #  puts "Your trip on #{first_line} #{first_half}."
                elsif first_USR_index > starting_index && second_USR_index < final_index #forward forward into the depths of broken code
                    puts first_half = "Get on #{starting} traveling through #{lines[first_line][:stops][starting_index...first_USR_index]} change at Union Square"
                    puts "Get on at Union Square traveling through #{lines[second_line][:stops][second_USR_index...final_index]} change at Union Square"
                else
                    reverse_line_stops = lines[first_line][:stops].reverse
                    reverse_starting_index = reverse_line_stops.index(starting)
                    reverse_USR_index = reverse_line_stops.index("Union Square")
                    puts "Get on #{starting} traveling through #{reverse_line_stops[reverse_starting_index...reverse_USR_index]} change at Union Square"
                    reverse_line_stops = lines[second_line][:stops].reverse
                    reverse_final_index = reverse_line_stops.index(final)
                    reverse_USR_index = reverse_line_stops.index("Union Square")
                    puts "Get on at Union Square travele through #{reverse_line_stops[reverse_USR_index...reverse_final_index]} change at Union Square"


                # if second_USR_index < final_index ##backwards trip 2nd half   
                #     reverse_line_stops = lines[second_line][:stops].reverse
                #     reverse_final_index = reverse_line_stops.index(final)
                #     reverse_USR_index = reverse_line_stops.index("Union Square")
                #     second_half = "Get on at Union Square travele through #{reverse_line_stops[reverse_USR_index...reverse_final_index]} change at Union Square"
                #     return second_half
                #     # "Your trip concludes on #{second_line} #{second_half}"
                # else ##forwards trip second half
                #     second_half = "Get on at Union Square traveling through #{lines[second_line][:stops][second_USR_index...final_index]} change at Union Square"
                #     return second_half
                    # "Your trip concludes on #{second_line} #{second_half}"
                # puts "Your trip on #{first_line} #{first_half}. Your trip concludes on #{second_line} #{second_half}"
        
                # lines["nLine"][:stops]
            end
        
        
    else puts "Invalid choice, invalid lifeform"
    end
my_trip
trip_choice = gets.chomp.downcase
end

 binding.pry  