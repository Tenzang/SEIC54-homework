puts "Welcome to the mortgage calculator"
print "Please enter the principal loan: "
principal_loan = gets.to_f
print "Please enter your interest rate: "
interest_rate = gets.to_f
print "Please enter the number of payments: "
no_of_payments = gets.to_f

i = (1+interest_rate)**no_of_payments
payment2 = (interest_rate*i)/(i-1)
payment = principal_loan*payment2

puts "Your monthly repayment is #{payment}"