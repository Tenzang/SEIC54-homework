//DrEvil

const DrEvil = function (money) {

    if(money == 1000000){
        console.log(`${money} dollars (pinky)`);
    }else{
        console.log(`${money} dollars`);
    }
};

DrEvil(10);
DrEvil(1000000);

//MixUp

let mixUp = function (word1,word2) {

    const w1 = word1.replace(word1.slice(0,2),word2.slice(0,2));
    const w2 = word2.replace(word2.slice(0,2),word1.slice(0,2));

    console.log(`${w1} ${w2}`);
};

mixUp("crow","chair");

//FixStart - NEED HELP************************************************************************

let fixStart = function (w) {
    for (let c = 1; c < w.length + 1; c++) {
        const ch = (w[c]);
        if(ch == w[0]){
            w.replace(w[c],"*");
        }else{
            return;
        }
    console.log(w);
    }
};

fixStart("bubble");

//verbing

const verbing = function (verb) {
    if (verb.length >= 3 && verb.slice(-3,verb.length) != "ing"){ // checks if over 3 length and last 3 chars does not equal to ing
        a = verb.concat("ing"); //adds ing to the end of word
        console.log(a);
    } else if (verb.length >= 3 && verb.slice(-3,verb.length) == "ing"){ // checks if over 3 length and last 3 chars does equal to ing
        b = verb.concat("ly"); //adds ly to end of word
        console.log(b);
    }else{
        console.log(verb); //leaves as is
    }
};

verbing("fish");
verbing("drinking");
verbing("do");

//Not Bad

const str = prompt("Please give us a sentence that contains 'not' and 'bad' ");

const notBad = function (str) {

    if(str.indexOf("bad") < str.indexOf("not")) { //Identify index of both 
        console.log("no");
    }else if (str.includes("not") && str.includes("bad")){ //Checks whether prompt contains both not and bad together.
        let strA = str.replace(str.substring(str.indexOf("bad"),str.substring(str.indexOf("not")),"good")));
        console.log(strA);
    }else{
        console.log(str);
    }

};

notBad(str);