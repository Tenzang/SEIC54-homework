const img = document.getElementsByTagName("img")[0]; //here we are getting the first img from the the dom
img.style.position = "absolute"; //setting the img position to be absolute // this detatches itself from the rest of the document (the documents natural structure) it sort of floats freely ontop of the rest now.
img.style.left = "0px"; //put it all the way to the left in a more absolute sort of way than margin or padding do.
const catWalk = function () {
  const oldLeft = parseInt(img.style.left); //interacting w the dom means we have to use strings to set things every freakin time, so parseInt will take something like "10px" and return it as 10, which the computer can think about, it doesn't know english.
  const newLeft = oldLeft + 1;
  img.style.left = newLeft + "px"; //cant do addition to a string and have it math properly, so we gotta get the int then turn it back to a string, so we seperate 0 from px, add 1 to it in its raw nummy form, and then px it and jail it in the string again.
  if (parseInt(img.style.left) === screen.width - img.width) {
    clearInterval(stop);
  }
};
const stop = setInterval(catWalk, 6); //set interval lets you put a function in it and then set the interval in which that function si repeatedly called. so setInterval(catwalk, 5); is equivalent to me saying hey please press the button that makes the cat move sligtly every 5 milleseconds seconds. ty.
