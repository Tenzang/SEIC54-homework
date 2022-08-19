const Pinneaple=["p","i","n","n","e","a","p","l","e"];
let guessLetters= function(guessedLetter){
    if(guessedLetter==!Pinneaple) {
    return console.log(`wrong letter`)
    }
    else console.log(`right letter`)

};

//Simon says

console.log('Simon Says');
console.log('------------------')

const simonSays= functon(phrase) {
  let response= 'whatever';

  if(phrase[phrase.length - 1]=== "?"){
    response= 'sure';
  } else if (phrase === phrase.toUpperCase()){
    response= "Woah, chill out!";
  } else if (phrase.trim() =
  ==' ') {
    response= 'fine. be that way!';
  }
  return response;
    
  }
