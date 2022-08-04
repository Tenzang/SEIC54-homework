# Calculate the body mass index (BMI) for an individual, given their height and weight

puts "What is your height in cm: "
height = gets.to_f

puts "What is your weight in kg: "
weight = gets.to_f

bmi = (weight / height ** 2) * 10000 
puts "Your BMI is #{ bmi }"