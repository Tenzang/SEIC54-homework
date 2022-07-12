 require 'pry' #this is your scripts src :)

lines = { "nLine" => { :stops => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],} }

## to access nLine stops : lines["nLine"][:stops]

## index of starting and ending staton : lines["nLine"][:stops].index("Union Square")

# to access the stops between stops on the line : lines["nLine"][:stops][4..5]

# start station and end station

# 8th "Times Square"

## lines["nLine"][:stops].reverse[0..5] output = ["8th", "Union Square", "23rd", "28th", "34th", "Times Square"] - yay

##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//##//


    puts "Enter your starting stop. : "
    starting = gets.split.map(&:capitalize).join(" ")
    puts "Enter your final stop. More lines coming soon: "
    final = gets.split.map(&:capitalize).join(" ")
    starting_index = lines["nLine"][:stops].index(starting)
    final_index = lines["nLine"][:stops].index(final)
if final_index < starting_index
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


 binding.pry 