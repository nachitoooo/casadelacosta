function showMenu() {
  var navLinks = document.getElementById("navLinks");
  var icon1 = document.getElementById("icon1");
  var icon2 = document.getElementById("icon2");
  navLinks.style.right = "0";
  icon1.style.display = "block";
  icon2.style.display = "none";
}

function hideMenu() {
  var navLinks = document.getElementById("navLinks");
  var icon1 = document.getElementById("icon1");
  var icon2 = document.getElementById("icon2");
  navLinks.style.right = "-200px";
  icon1.style.display = "none";
  icon2.style.display = "block";
}
var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; 
const interval = 3000; 
function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) { 
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = n;

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}
currentImg = (currentImg + 1) % imgs.length; 

if (n != undefined) {
  clearInterval(timer);
  timer = setInterval(changeSlide, interval);
  currentImg = n;
}
$('#carouselFade').carousel();