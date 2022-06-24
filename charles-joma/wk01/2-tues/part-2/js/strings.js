
const drEvil = function(amount){
    if(amount > 999999){
        const pinky = amount + " dollars (pinky)";
        console.log(pinky)
        return pinky
    } else {
        const pinky = amount + " dollars"
        console.log(pinky)
        return pinky;
    }
}

drEvil(1000000);

//============================================================//


const mixUp = function(string1,string2){
    //Slices from index 0 to index 2 but not including the letter at index 2, for the first string 
    const string1Start = string1.slice(0, 2);
    //Does the same here but does it for the second string 
    const string2Start = string2.slice(0, 2);

    //This grabs the end of the first string, use negative indices to grab the last 3 characters of the string (string 1)
    const string1End = string1.slice(-3);
    //This grabs the end of the first string, use negative indices to grab the last 3 characters of the string (string 2)
    const string2End = string2.slice(-3);

    //Grabs the begginning of string 2 and concatenates it to the end of string 1
    const string1Swapped = string2Start + string1End;
    //Grabs the begginning of string 1 and concatenates it to the end of string 2
    const string2Swapped = string1Start + string2End;

    //Combines both the string and puts a space inbetween
    const stringsCombined = string1Swapped + " " + string2Swapped;

    console.log(stringsCombined);
    return stringsCombined;
}
mixUp("maybe", "jam");


//===========================================================//


const fixStart = function(string){
    //split the string
    const stringSplit = string.split("");
    //grab the first character
    let firstCharacter = stringSplit[0];
    //use replace on the first character
    let replacementString = string.replaceAll(firstCharacter, "*");

    for( let i = 0; i < stringSplit.length;i++){
        if(stringSplit[i] === firstCharacter){
            replacementString = stringSplit[0] + replacementString
            break;
        } 
    }
    
console.log(replacementString); 
}


fixStart("babble");