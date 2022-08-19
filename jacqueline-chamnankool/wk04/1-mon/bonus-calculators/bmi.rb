puts "=" * 70
puts "BMI Calculator"
puts "=" * 70
print "Enter your height in meters: "
height = gets.chomp.to_f
print "Enter your weight in kilograms: "
weight = gets.chomp.to_i

def bmi(height, weight)
    (weight / height**2).round(2)
end

puts "-" * 70
puts "→ BMI: #{bmi height, weight}"

# test values
# 1.52
# 60
# => 25.97