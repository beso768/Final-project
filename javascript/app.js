var container = document.getElementById("container") ;
var loader = document.getElementById("loader") ;
window.addEventListener("load", function () {
  loader.style.display = "none" ;
  container.style.display = "block" ;
}) ;
// burger menu 
var burger = document.getElementById("burger") ;
var back = document.getElementById("x");
burger.addEventListener("click", function() {
  document.getElementById("nav").style.right = "0"
});

back.addEventListener("click" , function() {
  document.getElementById("nav").style.right = "-100%"
}) ;

var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1} ;   
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 20000);    
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// scrollup function
var scrollUp = document.getElementById ("up") ; 

scrollUp.addEventListener ("click" , function () {
  window.scrollTo (0 , 0) ;
});


 