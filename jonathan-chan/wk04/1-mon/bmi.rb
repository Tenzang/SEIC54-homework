print "please enter weight in kg: "
weight = gets.to_f
print "please enter height in m: "
height = gets.to_f

bmi = weight / (height**2)

puts "your bmi is #{bmi}"