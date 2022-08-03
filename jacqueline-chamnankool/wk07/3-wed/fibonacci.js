const fibonacci = function (n, memo = []) {
    if (n <= 2) return 1;
    // if value has been calculated previously, return it
    if (memo[n]) return memo[n];
    // store old values in cache
    memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
    return memo[n];
};

console.log(fibonacci(10));
console.log(fibonacci(40));
console.log(fibonacci(60));

