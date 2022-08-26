const e = require("express");

function binarySearch(haystack, needle){
    let start = 0;
    let end = haystack.length -1;
    let midPoint = Math.floor((start + end) /2);

    while (haystack[midpoint] !== needle && start < end) {
        if (needle < haystack[midPoint]) {
            end = midpoint - 1;
        } else {
            start = midPoint + 1;
        };
        midPoint = Math.floor(start + end) / 2;
    }
    return (needle === haystack[midpoint]) ? midPoint : -1; // -1 is the traditional way to say that this did not exist in the array, in most languages a -1 is not a valid array indeces 
};

function recursiveBinarySearch  (haystack,
                                needle,
                                start=0,
                                end=haystack.length-1,
                                midPoint=Math.floor((start + end) /2)) {
    if (haystack[midPoint] === needle) return midPoint;
    if (start >= end) return -1;

    if (needle < haystack[midPoint]) {
        end = midPoint-1;
    } else {
        start = midPoint+1;
    }
    return recursiveBinarySearch(haystack, needle, start, end);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}