# Mini-Max Sum
In **Ruby** write a function that accepts an array of five integers and **displays in the terminal** the minimum and maximum values that can be calculated by summing exactly four of the five integers.
### Example:
```rb
minimax_sum [1, 9, 5, 3, 7] # => min sum: 16, max sum: 24
```
### Bonus:
Have the function accept two arguments: an array containing **any numbers** of integers, and an integer that indicates how many numbers of the array to calculate minimum and maximum value from.
### Example:
```ruby
minimax_sum [1, 9, 5, 3, 7, 11], 3
# => min sum: 9, max sum: 27
# because min sum = 1 + 3 + 5 & max sum = 7 + 9 + 11
```