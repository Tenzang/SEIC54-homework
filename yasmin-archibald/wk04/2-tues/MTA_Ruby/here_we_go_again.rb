require 'pry' #this is your scripts src :)

lines = { "nLine" => { :stops => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],} }

puts "Enter your starting stop. : "
starting = gets.split.map(&:capitalize).join(" ")
p starting
puts "Enter your final stop. More lines coming soon: "
final = gets.split.map(&:capitalize).join(" ")
p final
starting_index = lines["nLine"][:stops].index(starting)
p starting_index
final_index = lines["nLine"][:stops].index(final)
p final_index
if final_index < starting_index
reverse_line_stops = lines["nLine"][:stops].reverse
reverse_starting_index = reverse_line_stops.index(starting)
reverse_final_index = reverse_line_stops.index(final)
puts "Get on #{starting} traveling through #{reverse_line_stops[reverse_starting_index...reverse_final_index]} depart at #{final}"
else 
puts "Get on #{starting} traveling through #{lines["nLine"][:stops][starting_index...final_index]} depart at #{final}"

end

 binding.pry  