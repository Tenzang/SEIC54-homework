$train_lines = {
    :N => ['Times Square', '34th', 'N28th', '23rd', 'Union Square', '8th'],
    :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
    :Six => ['Grand Central', '33rd', 'Six28th', '23rd', 'Union Square', 'Astor Place']
}

intersect_station = 'Union_Square'

def get_train_array(line_num) # I have no idea why this works, but it does!
    $train_lines.each do |key, value| 
        if line_num != $train_lines[key]
            this_line = $train_lines[line_num]
        end
            return this_line
    end
end




# print  $train_lines 
print get_train_array(:N)
print get_train_array(:L)
print get_train_array(:Six)
# print $train_lines[:N]