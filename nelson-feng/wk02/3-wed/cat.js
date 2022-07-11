// # Exercises: Animation

// ## The Cat Walk

const cat = document.getElementById("black-cat");

cat.style.position = 'absolute';
cat.style.left = '0px';

const catWalkingRight = function () {
    cat.style.transform = 'scaleX(1)';
    const startPosition = parseInt(cat.style.left);
    const newPosition = startPosition + 1;
    cat.style.left = newPosition + 'px';
    if(cat.style.left === '1180px'){
        clearInterval(intervalId);
        setInterval(catWalkingLeft, 10);
    }
}
const catWalkingLeft = function () {
    cat.style.transform = 'scaleX(-1)';
    const startPosition = parseInt(cat.style.left);
    const newPosition = startPosition - 1;
    cat.style.left = newPosition + 'px';
    if(cat.style.left === '0px'){
        setInterval(catWalkingRight, 10);
    }
}
const intervalId= setInterval(catWalkingRight, 10);

//POWERPUFF GIRLS

const original = document.getElementById("original");
original.style.left = '1200px';
const OriginalWalkingLeft = function () {
    const startPosition = parseInt(original.style.left);
    const newPosition = startPosition - 1;
    original.style.left = newPosition + 'px';
}
const intervalId2= setInterval(OriginalWalkingLeft, 15);

//Pikachu

const pika = document.getElementById("pika");
pika.style.left = '1200px';
const pikaWalkingLeft = function () {
    const startPosition = parseInt(pika.style.left);
    const newPosition = startPosition - 2;
    pika.style.left = newPosition + 'px';
}
const intervalId3= setInterval(pikaWalkingLeft, 5);

//spirt
const spirit = document.getElementById("spirit");
spirit.style.left = '-600px';
const spiritWalkingLeft = function () {
    const startPosition = parseInt(spirit.style.left);
    const newPosition = startPosition + 2;
    spirit.style.left = newPosition + 'px';
}
const intervalId4= setInterval(spiritWalkingLeft, 15);

//shrek

const shrek = document.getElementById("shrek");
shrek.style.bottom = '500px';
const shrekWalkingbottom = function () {
    const startPosition = parseInt(shrek.style.bottom);
    const newPosition = startPosition + 2;
    shrek.style.bottom = newPosition + 'px';
}
const intervalId5= setInterval(shrekWalkingbottom, 100);

//pepe

const pepe = document.getElementById("pepe");
pepe.style.left = '1200px';
const pepeWalkingLeft = function () {
    const startPosition = parseInt(pepe.style.left);
    const newPosition = startPosition - 2;
    pepe.style.left = newPosition + 'px';
}
const intervalId6= setInterval(pepeWalkingLeft, 50);

//spiderman

const spiderman = document.getElementById("spiderman");
spiderman.style.bottom = '1000px';
const spidermanWalkingbottom = function () {
    const startPosition = parseInt(spiderman.style.bottom);
    const newPosition = startPosition - 2;
    spiderman.style.bottom = newPosition + 'px';
}
const intervalId7= setInterval(spidermanWalkingbottom, 50);













