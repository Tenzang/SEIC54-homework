# // # MTA
n = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
l = ["8th", "6th", "Union Square", "3rd", "1st"]
six= ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
def travel(ls,ss,le,se)
    start = ls.index(ss)
    finish = le.index(se)
    stns = []
    ls[start+1..finish -1].each { |i| stns << i } if (finish - start).positive? #If Positive then it will iterate left to right
    ls[finish +1..start-1].reverse_each { |i| stns << i } if (finish - start).negative?
    return stns
end

def before_union(ls,ss)
    start = ls.index(ss)
    start_union = ls.index("Union Square") # √√
    stns = []
    ls[start +1..start_union -1].each { |i| stns << i } if (start_union - start).positive?
    ls[start_union+1..start-1].reverse_each { |i| stns << i } if (start_union - start).negative?
    return stns
end

def after_union(le,se)
    end_union = le.index("Union Square") # √√
    finish = le.index(se)
    stns = []
    le[end_union +1..finish -1].each { |i| stns << i } if (finish - end_union).positive?
    le[finish +1..end_union -1].reverse_each { |i| stns << i } if (finish - end_union).negative?
    stns.drop(1)
    return stns
end

def my_trip(ls,ss,le,se) # *ls - line start | *ss - stn start | *le - line end | *se - stn end
    if ls != le
        distance = (ls.index("Union Square") - ls.index(ss)).abs + (le.index(se) - le.index("Union Square")).abs
        before = before_union(ls,ss).join(', ')
        after = after_union(le,se).join(', ')
        puts "Starting at #{ss} \nSwitch at Union Square \nYour journey ends at #{se}\nTotal Stops: #{distance}" if distance <= 2
        puts "Starting at #{ss} you must travel through the following stops #{before} \nSwitch at Union Square \nYour journey continues through the following stops: #{after} and ending at #{se}\n Total Stops: #{distance}" if distance > 2
    else
        distance = (le.index(se) - ls.index(ss)).abs
        stops = travel(ls,ss,le,se).join(', ')
        puts " Starting from #{ss} you are one stop away from #{se} station" if distance < 2
        puts " Starting from #{ss} you will need to take the following station(s) #{stops} to reach #{se} station \n Total stops: #{distance}" if distance >= 2
    end
end

puts "+-+-+-+-+-+-+-+-+-+-+Line N 34th to Line N 8th +-+-+-+-+-+-+-+-+-+-+" #one line 4 stops left to right
my_trip(n,"34th", n,"8th")

puts "+-+-+-+-+-+-+-+-+-+-+Line six Union Square to Line six 33rd +-+-+-+-+-+-+-+-+-+-+" # one line 4 stops right to left
my_trip(six,"Union Square", six,"33rd")

puts "+-+-+-+-+-+-+-+-+-+-+Line l 8th to Line l 6th +-+-+-+-+-+-+-+-+-+-+" # one line 4 stops right to left
my_trip(l,"8th", l,"6th")

puts "+-+-+-+-+-+-+-+-+-+-+Line N 8th to Line six Grand Central +-+-+-+-+-+-+-+-+-+-+"  # Multi line 5 stops left to right
my_trip(n,"8th", six,"Grand Central")

puts "+-+-+-+-+-+-+-+-+-+-+Line N Times Square to Line l 8th +-+-+-+-+-+-+-+-+-+-+" # Multi line  6 stops right to left
my_trip(n,"Times Square", l,"8th")

puts "+-+-+-+-+-+-+-+-+-+-+Line six 23rd to Line l 3rd +-+-+-+-+-+-+-+-+-+-+" # Multi line 2 stops
my_trip(six,"23rd", l,"3rd")


# def my_trip(ls,ss,le,se)
#     if ls != le
#         before_d = (ls.index("Union Square") - ls.index(ss)).abs
#         after_d = (le.index(se) - le.index("Union Square")).abs
#         distance = before_d + after_d 
#         before = before_union(ls,ss).join(', ')
#         after = after_union(le,se).join(', ')
#         puts "Starting at #{ss} \nSwitch at Union Square \nYour journey ends at #{se}\nTotal Stops: #{distance}" if distance <= 2
#         puts "Starting at #{ss} \nSwitch at Union Square \nYour journey continues through the following stops: #{after} and ending at #{se}\nTotal Stops: #{distance}" if before_d <= 1
#         puts "Starting at #{ss} you must travel through the following stops #{before} \nSwitch at Union Square \nYour journey ends at #{se}\nTotal Stops: #{distance}" if after_d <= 1
#         puts "Starting at #{ss} you must travel through the following stops #{before} \nSwitch at Union Square \nYour journey continues through the following stops: #{after} and ending at #{se}\n Total Stops: #{distance}" if distance > 2
#     else
#         distance = (le.index(se) - ls.index(ss)).abs
#         stops = travel(ls,ss,le,se).join(', ')
#         puts " Starting from #{ss} you are one stop away from #{se} station" if distance < 2
#         puts " Starting from #{ss} you will need to take the following station(s) #{stops} to reach #{se} station \n Total stops: #{distance}" if distance >= 2
# #     end
# # end

# puts "+-+-+-+-+-+-+-+-+-+-+Line l 8th to Line l 6th +-+-+-+-+-+-+-+-+-+-+" # one line 4 stops right to left
# my_trip(l,"8th", l,"6th")