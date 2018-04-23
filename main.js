var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 0; i<= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + i);
  thumbBar.appendChild(newImage);
  
  newImage.onclick = function(e) {
  var smallImage = e.target.getAttribute ('img', 'src');
  return displayImage(smallImage)} 
  }
  
function displayImage(smallImage) {
  displayedImage.setAttribute('src')
  }
/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
    var btnCheck = btn.getAttibute('class')
 if (btn.Check = 'dark') {
     btn.setAttribute('class', 'light');
     btn.textContent = 'Lighten';
     overlay.style.backgroundColor = 'rgba(0,0,0.5)';
 else {
     btn.setAttribute('class', 'dark');
     btn.textContent = 'Darken';
     overlay.style.backgroundColor = 'rgba(0,0,0,0,)'
     }
 }
}