var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

for (var i = 0; i<= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', images/ + i;);
  thumbBar.appendChild(newImage);
    newImage.onclick = function(e) {
      var srcImage = e.target.getAttribute ('img', 'src');
        displayedImage(srcImage);
    } 
    }
  function displayedImage(srcImage) {
      
  }
    
   
}

/* Wiring up the Darken/Lighten button */

