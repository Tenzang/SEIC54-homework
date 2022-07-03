var img = document.getElementById('cat');
img.style.position = 'absolute';
img.style.left = '0px';
img.style.top = '650px';
var catWalk = function() {
  var oldLeft = parseInt(img.style.left);
  var newLeft = oldLeft + 10;
  img.style.left = newLeft + 'px';
  if(img.style.left==='1280px'){
      clearInterval(timerID)
  }
};
const timerID=setInterval(catWalk, 100);

