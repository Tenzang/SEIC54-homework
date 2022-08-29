def fib_memo(n)
    @fib ||= {} #assigns empty hash to @fib if it doesnt already have a value
    if @fib[n] #if we have previously saved this fibonacci number
        @fib[n] #return that value immediately
    elsif n <= 2
        1
    else
        @fib[n] = fib_memo(n-1) + fib_memo(n-2) #save this fibonacci number for later use
    end
end


def fib(n, a=1, b=2)
    if n == 1 || n == 2 # base case
        b
    else
        fib n-1, b, a+b # almost mystical
    end
end

puts fib 6
# Tail Call optimisation