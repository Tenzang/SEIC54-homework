puts "=" * 70
puts "Trip Calculator"
puts "=" * 70
print "Enter your distance in miles: "
distance = gets.chomp.to_i
print "Enter your miles per gallon: "
miles_per_gallon = gets.chomp.to_i
print "Enter your price per gallon: "
price_per_gallon = gets.chomp.to_f
print "Enter your speed in miles per hour: "
speed = gets.chomp.to_i

def trip_time(distance, speed)
    (distance / speed).round(2)
end

def trip_cost(distance, miles_per_gallon, price_per_gallon)
    gallons_needed = distance / miles_per_gallon
    (price_per_gallon * gallons_needed).round(2)
end

puts "-" * 70
puts "→ Total trip time: #{trip_time distance, speed} hours"
puts "→ Total trip cost: $#{trip_cost distance, miles_per_gallon, price_per_gallon}"

# test values
# 500 miles
# 100 miles/gallon
# 5.01 dollars/gallon
# 80 mph
# => 25.97