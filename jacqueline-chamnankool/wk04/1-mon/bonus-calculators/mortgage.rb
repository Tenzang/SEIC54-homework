puts "=" * 70
puts "Mortgage Calculator"
puts "=" * 70
print "Enter your principal loan amount: "
principal_loan = gets.chomp.to_f
print "Enter your monthly interest rate: "
monthly_interest_rate = gets.chomp.to_f
print "Enter your number of months: "
num_months = gets.chomp.to_i

def mortgage_calculator(p, i, n)
    part = (1 + i)**n
    numerator = i * part
    denominator = part - 1
    return (p * (numerator/denominator)).round(2)
end

puts "-" * 70
puts "→ Monthly repayment: $#{mortgage_calculator(principal_loan, monthly_interest_rate, num_months)}"

# test values
# 100000
# 0.00416667
# 180
# => $790.79

# formula 
# https://www.wikihow.com/Calculate-Mortgage-Payments#wh-dialog-sample_d8cbcff7f075b897c3876792a8f080a5