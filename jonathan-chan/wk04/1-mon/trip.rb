puts "welcome to the trap calculator"
print "please enter distance: "
distance = gets.to_f
print "please enter miles per gallon: "
mpg = gets.to_f
print "please enter price per gallon: "
ppg = gets.to_f
print "please enter speed in miles per hour: "
smph = gets.to_f

fuel_needed = distance / mpg
time_needed = distance /    smph
cost = fuel_needed*ppg

puts "Your trip will take #{time_needed} hours and cost #{cost}"