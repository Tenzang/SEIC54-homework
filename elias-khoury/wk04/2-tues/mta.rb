$train_lines = {
    "l_line" => ["1st", "3rd", "Union Square", "6th", "8th"],
    "n_line" => ["timeSquare", "34th", "28th", "23rd", "Union Square", "8th"],
    "sixth_line" => ["grandCentral", "33rd", "28th", "23rd", "Union Square", "astorPlace"]
}

$stop_count = 0

def stop_station(lines, begin_stop, end_stop)

    if begin_stop < end_stop
        $train_lines[lines][begin_stop.to_i..end_stop.to_i].each do |n|
            $stop_count += 1
            stops = n
            puts stops
        end
    else
        $train_lines[lines][end_stop.to_i..begin_stop.to_i].each do |n|
            $stop_count += 1
            puts n
        end 
    end
end



def plan_trip(begin_line, begin_stop, end_line, end_stop)
    if begin_line == end_line
        print "you must travel through the follow stops on the #{ begin_line }: #{ stop_station(begin_line, begin_stop, end_stop) }"
    else
        puts "im walking here"
    end    
end




# puts "--"*40

# stop_station("l_line", "1st", "8th")

# puts "--"*40

# stop_station("l_line", "8st", "1st")

puts "--"*40

plan_trip("l_line", "1st", "l_line", "8th")
puts "--"*40

plan_trip("l_line", "Union Square", "l_line", "1st")
puts "--"*40
