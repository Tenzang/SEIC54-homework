$train_lines = {
    "l_line" => ["1st", "3rd", "Union Square", "6th", "8th"],
    "n_line" => ["timeSquare", "34th", "28th", "23rd", "Union Square", "8th"],
    "sixth_line" => ["grandCentral", "33rd", "28th", "23rd", "Union Square", "astorPlace"]
}

$stop_count = 0



def plan_trip(begin_line, begin_stop, end_line, end_stop)



    
    if begin_line == end_line
            first_line = $train_lines[begin_line]
            
            $start = first_line.index(begin_stop) 
            $finish = first_line.index(end_stop) 

            if $start > $finish
                travel1 = first_line.slice(first_line.index(end_stop) + 1 .. first_line.index(begin_stop)).join(', ')
            else
                travel1 = first_line.reverse.slice(first_line.index(begin_stop) + 1 .. first_line.index(end_stop)).join ', '
            end
        
        puts "you must travel through the follow stops on the #{ begin_line }: #{ travel1 }"

    else
        first_line = $train_lines[begin_line]
        second_line = $train_lines[end_line]
        if  second_line.index(end_stop) < second_line.index("Union Square") then $travel3 = second_line.reverse.slice(second_line.index(end_stop) +1 .. second_line.index("Union Square") ).join(', ') end
        if  second_line.index(end_stop) > second_line.index("Union Square") then $travel3 = second_line.reverse.slice(second_line.index("Union Square") +1 .. second_line.index(end_stop) ).join(', ') end

        if $start < first_line.index("Union Square") && 
            
            travel2 = first_line.slice(first_line.index(begin_stop) +1 .. first_line.index("Union Square") -1).join(', ')
            
            
            
        puts "you must travel through the following stops on the #{ begin_line }: #{travel2}"
        puts "change at union square"
        puts "Your journey continuues through the follow stops: #{$travel3}"
     
        else 
            travel2 = first_line.reverse.slice(first_line.index(begin_stop)-1.. first_line.index("Union Square")).join ', '
        
        puts "you must travel through the following stops on the #{ begin_line }: #{travel2}"
        puts "change at union square"
        puts "Your journey continuues through the follow stops: #{travel3}"

        end
    end    
end






puts "--"*40
plan_trip("l_line", "6th", "l_line", "1st")
puts "--"*40

plan_trip("l_line", "1st", "l_line", "8th")
puts "--"*40

plan_trip("l_line", "1st", "n_line", "34th")
puts "--"*40

plan_trip("l_line", "8th", "n_line", "34th")
puts "--"*40