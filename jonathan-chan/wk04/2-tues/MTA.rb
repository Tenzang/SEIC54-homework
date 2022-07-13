n_line = %w(TimesSquare 34th 28th 23rd UnionSquare 8th)
l_line = %w(8th 6th UnionSquare 3rd 1st)
six_line = %w(GrandCentral 33rd 28th 23rd UnionSquare AstorPlace)
st_station = false
st_line = false
ed_station = false
ed_line = false
starting_line = ''
starting_station = ''
ending_line = ''
ending_station = ''

def show_lines
    puts "
      o o o o o o o . . ______________________________ _____=======_||_______
    o      _____           ||                            | |                 |
  .][__n_n_|DD[  ====_____  |       NEW YORK METRO       | |                 |
 >(________|__|_[_________]_|____________________________|_|_________________|
 _/oo OOOOO oo`  ooo   ooo  'o!o!o                  o!o!o` 'o!o         o!o`
 -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-"
    puts "=-"*40
    puts "Please pick your start destination:"
    puts "   [1]   N-Line"
    puts "   [2]   L-Line"
    puts "   [3]   6-Line"
    puts "=-"*40
end

show_lines
line_choice = gets.chomp
starting_line_choice = ''

unless st_line == true
    case line_choice
    when '1'
        puts "N-Line Selected!"
        st_line = true
        starting_line = n_line
        starting_line_choice = 'N'
    when '2'
        puts "L-Line Selected!"
        st_line = true
        starting_line = l_line
        starting_line_choice = 'L'
    when '3'
        puts "6-Line Selected!"
        st_line = true
        starting_line = six_line
        starting_line_choice = '6'
    end
end

#N-Line menu start ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

def show_n_stations 
    puts "=-"*40
    puts "Please Select a station:"
    puts "   [1]   Times Square"
    puts "   [2]   34th"
    puts "   [3]   28th"
    puts "   [4]   23rd"
    puts "   [5]   Union Square"
    puts "   [6]   8th"
    puts "=-"*40
end

show_n_stations if starting_line_choice == 'N'
n_station_selection = gets.chomp if starting_line_choice == 'N'

unless st_station == true
    case n_station_selection
    when '1'
        puts "Times Square Selected!"
        st_station = true
        starting_station = 'TimesSquare'
    when '2'
        puts "34th Selected!"
        st_station = true
        starting_station = '34th'
    when '3'
        puts "28th Selected!"
        st_station = true
        starting_station = '28th'
    when '4'
        puts "23rd Selected!"
        st_station = true
        starting_station = '23rd'
    when '5'
        puts "Union Square Selected!"
        st_station = true
        starting_station = 'UnionSquare'
    when '6'
        puts "8th Selected!"
        st_station = true
        starting_station = '8th'
    end
    puts "=-"*40
end

#N-Line menu end ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#L-Line menu start ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

def show_l_stations
    puts "=-"*40
    puts "Please Select a station:"
    puts "   [1]   3rd"
    puts "   [2]   6th"
    puts "   [3]   Union Square"
    puts "   [4]   3rd"
    puts "   [5]   1st"
    puts "=-"*40
end

show_l_stations if starting_line_choice == 'L'
l_station_selection = gets.chomp if starting_line_choice == 'L'

unless st_station == true
    case l_station_selection
    when '1'
        puts "8th Selected!"
        st_station = true
        starting_station = '8th'
    when '2'
        puts "6th Selected!"
        st_station = true
        starting_station = '6th'
    when '3'
        puts "Union Square Selected!"
        st_station = true
        starting_station = 'UnionSquare'
    when '4'
        puts "3rd Selected!"
        st_station = true
        starting_station = '3rd'
    when '5'
        puts "1st Selected!"
        st_station = true
        starting_station = '1st'
    end
    puts "=-"*40
end

#L-Line menu end ////////////////////////////////////////////////////////////////////////////////
#6-Line menu start //////////////////////////////////////////////////////////////////////
def show_six_stations
    puts "=-"*40
    puts "Please Select a station:"
    puts "   [1]   Grand Central"
    puts "   [2]   33rd"
    puts "   [3]   28th"
    puts "   [4]   23rd"
    puts "   [5]   Union Square"
    puts "   [6]   Astor Place"
    puts "=-"*40
end

show_six_stations if starting_line_choice == '6'
six_station_selection = gets.chomp if starting_line_choice == '6'

unless st_station == true
    case six_station_selection
    when '1'
        puts "Grand Central Selected!"
        st_station = true
        starting_station = 'GrandCentral'
    when '2'
        puts "33rd Selected!"
        st_station = true
        starting_station = '33rd'
    when '3'
        puts "28th Selected!"
        st_station = true
        starting_station = '28th'
    when '4'
        puts "23rd Selected!"
        st_station = true
        starting_station = '23rd'
    when '5'
        puts "Union Square Selected!"
        st_station = true
        starting_station = 'UnionSquare'
    when '6'
        puts "Astor Place Selected!"
        st_station = true
        starting_station = 'AstorPlace'
    end
    puts "=-"*40
end

#6-Line menu emd //////////////////////////////////////////////////////////////////////

def show_end_lines
    puts "Please pick your end destination:"
    puts "   [1]   N-Line"
    puts "   [2]   L-Line"
    puts "   [3]   6-Line"
    puts "=-"*40
end

show_end_lines
end_line_choice = gets.chomp
ending_line_choice = ''

unless ed_line == true
    case end_line_choice
    when '1'
        puts "N-Line Selected!"
        ed_line = true
        ending_line = n_line
        ending_line_choice = 'N'
    when '2'
        puts "L-Line Selected!"
        ed_line = true
        ending_line = l_line
        ending_line_choice = 'L'
    when '3'
        puts "6-Line Selected!"
        ed_line = true
        ending_line = six_line
        ending_line_choice = '6'
    end
end

#N-Line menu start ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

def show_n_end_stations 
    puts "=-"*40
    puts "Please Select a station:"
    puts "   [1]   Times Square"
    puts "   [2]   34th"
    puts "   [3]   28th"
    puts "   [4]   23rd"
    puts "   [5]   Union Square"
    puts "   [6]   8th"
    puts "=-"*40
end

show_n_end_stations if ending_line_choice == 'N'
n_end_station_selection = gets.chomp if ending_line_choice == 'N'

unless ed_station == true
    case n_end_station_selection
    when '1'
        puts "Times Square Selected!"
        ed_station = true
        ending_station = 'TimesSquare'
    when '2'
        puts "34th Selected!"
        ed_station = true
        ending_station = '34th'
    when '3'
        puts "28th Selected!"
        ed_station = true
        ending_station = '28th'
    when '4'
        puts "23rd Selected!"
        ed_station = true
        ending_station = '23rd'
    when '5'
        puts "Union Square Selected!"
        ed_station = true
        ending_station = 'UnionSquare'
    when '6'
        puts "8th Selected!"
        ed_station = true
        ending_station = '8th'
    end
    puts "=-"*40
end

#N-Line menu end ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#L-Line menu start ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

def show_l_end_stations
    puts "=-"*40
    puts "Please Select a station:"
    puts "   [1]   3rd"
    puts "   [2]   6th"
    puts "   [3]   Union Square"
    puts "   [4]   3rd"
    puts "   [5]   1st"
    puts "=-"*40
end

show_l_end_stations if ending_line_choice == 'L'
l_end_station_selection = gets.chomp if ending_line_choice == 'L'

unless ed_station == true
    case l_end_station_selection
    when '1'
        puts "8th Selected!"
        ed_station = true
        ending_station = '8th'
    when '2'
        puts "6th Selected!"
        ed_station = true
        ending_station = '6th'
    when '3'
        puts "Union Square Selected!"
        ed_station = true
        ending_station = 'UnionSquare'
    when '4'
        puts "3rd Selected!"
        ed_station = true
        ending_station = '3rd'
    when '5'
        puts "1st Selected!"
        ed_station = true
        ending_station = '1st'
    end
    puts "=-"*40
end

#L-Line menu end ////////////////////////////////////////////////////////////////////////////////
#6-Line menu start //////////////////////////////////////////////////////////////////////
def show_end_stations
    puts "=-"*40
    puts "Please Select a station:"
    puts "   [1]   Grand Central"
    puts "   [2]   33rd"
    puts "   [3]   28th"
    puts "   [4]   23rd"
    puts "   [5]   Union Square"
    puts "   [6]   Astor Place"
    puts "=-"*40
end

show_end_stations if ending_line_choice == '6'
six_end_station_selection = gets.chomp if ending_line_choice == '6'

unless ed_station == true
    case six_end_station_selection
    when '1'
        puts "Grand Central Selected!"
        ed_station = true
        ending_station = 'GrandCentral'
    when '2'
        puts "33rd Selected!"
        ed_station = true
        ending_station = '33rd'
    when '3'
        puts "28th Selected!"
        ed_station = true
        ending_station = '28th'
    when '4'
        puts "23rd Selected!"
        ed_station = true
        ending_station = '23rd'
    when '5'
        puts "Union Square Selected!"
        ed_station = true
        ending_station = 'UnionSquare'
    when '6'
        puts "Astor Place Selected!"
        ed_station = true
        ending_station = 'AstorPlace'
    end
    puts "=-"*40
end

#6-Line menu emd //////////////////////////////////////////////////////////////////////

def plan_trip (start_line, start_station, end_line, end_station)
    travel = ''
    destination = ''
    total_stops = 0
    unless start_station == "UnionSquare" 
        start = start_line.index(start_station).to_i
        start_to_union_square = start_line.index('UnionSquare').to_i
        total_stops = (start - start_to_union_square).abs
        travel = start_line[start+1..start_to_union_square] if start < start_to_union_square #if start station is before U.S
        travel = start_line[start_to_union_square..start-1].reverse if start > start_to_union_square #if station is after U.S
        p "Travel through the following stops: #{travel.join(', ')}"
        p "Change at Union Square"
    else 
        p "You are starting at Union Square"
    end
    unless end_station == "UnionSquare" 
        end_stop = end_line.index(end_station).to_i
        end_to_union_square = end_line.index('UnionSquare').to_i
        total_stops = total_stops + (end_to_union_square - end_stop).abs
        destination = end_line[end_stop..end_to_union_square-1].reverse if end_stop < end_to_union_square #if end station is before U.S
        destination = end_line[end_to_union_square+1..end_stop] if end_stop > end_to_union_square #if end station is after U.S
        p "Your journey continues through the following stops: #{destination.join(', ')}"
        p "Total stops: #{total_stops}"
    else 
        p "Total stops: #{total_stops}"
    end
end

plan_trip starting_line, starting_station, ending_line, ending_station

puts "=-"*40
puts " Thank you for using the New York Metro (. ❛ ᴗ ❛.)"
puts "
      o o o o o o o . . ______________________________ _____=======_||_______
    o      _____           ||                            | |                 |
  .][__n_n_|DD[  ====_____  |       NEW YORK METRO       | |                 |
 >(________|__|_[_________]_|____________________________|_|_________________|
 _/oo OOOOO oo`  ooo   ooo  'o!o!o                  o!o!o` 'o!o         o!o`
 -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-"
puts "=-"*40