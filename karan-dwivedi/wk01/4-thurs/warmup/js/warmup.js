const simonSays = function (string){
    var a = string.split("");
    for (i=0;i<a.length;i++)
    var input = string.toUpperCase();
if (a[a.length-1]==='?') {
    return 'Sure.'
}
else if (string=== input) {
    return "Woah, chill out!"
}
else if (a === "" || a === null) {
    return "Fine, be that way"
}
else {
    return "Whatever."
}
}
console.log(simonSays("6"));

