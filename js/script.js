const navbar_toggler = document.querySelector('.navbar-toggler');
const navbarhr = document.querySelector('.navbar');
navbar_toggler.addEventListener('click', () =>{
    navbarhr.classList.toggle('clase');
});
window.addEventListener('scroll', () => {
    const bgpink = document.querySelector('.bg_pink');
    const ubibgpink = bgpink.getBoundingClientRect();

    if (ubibgpink.top < 500) {
        bgpink.classList.add('fadeIn');
    }
});
window.addEventListener('scroll', () => {
    const cartel = document.querySelector('.cartel_data');
    const ubicartel = cartel.getBoundingClientRect();
    console.log(ubicartel);

    if (ubicartel.top < 700) {
        cartel.classList.add('fadeIn');
    }
});
window.addEventListener('scroll', () => {
    const hand = document.querySelector('.hand');
    const thehand = hand.getBoundingClientRect();
    console.log(thehand);

    if (thehand.top < 1500) {
        hand.classList.add('handIn');
        hand.classList.add('enchufa');
    }
});
window.addEventListener('scroll', () => {
    const bgblue = document.querySelector('.bg_blue');
    const ubibgblue = bgblue.getBoundingClientRect();

    if (ubibgblue.top < 500) {
        bgblue.classList.add('fadeIn');
    }
});
window.addEventListener('scroll', () => {
    const marketplace = document.querySelector('.marketplace');
    const ubimarketplace = marketplace.getBoundingClientRect();
    console.log(ubimarketplace);

    if (ubimarketplace.top < 700) {
        marketplace.classList.add('fadeIn');
    }
});
window.addEventListener('scroll', () => {
    const hand_blue = document.querySelector('.hand_blue');
    const thehand_blue = hand_blue.getBoundingClientRect();
    console.log(thehand_blue);

    if (thehand_blue.top < 1500) {
        hand_blue.classList.add('handIn');
        hand_blue.classList.add('enchufa');
    }
});
window.addEventListener('scroll', () => {
    const manchas = document.querySelector('.manchas');
    const themanchas = manchas.getBoundingClientRect();
    console.log(themanchas);

    if (themanchas.top < 500) {
        manchas.classList.add('manchasIn');
    }
});
window.addEventListener('scroll', () => {
    const city = document.querySelector('.city');
    const thecity = city.getBoundingClientRect();
    console.log(thecity);

    if (thecity.top < 500) {
        city.classList.add('cityIn');
    }
});
window.addEventListener('scroll', () => {
    const city = document.querySelector('.people');
    const thepeople = people.getBoundingClientRect();
    console.log(thepeople);

    if (thepeople.top < 500) {
        people.classList.add('peopleIn');
    }
});
function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}
var speedp = 60;
var speed = 125;
var speedtwo = 125;
var h1 = document.querySelector('h1 span.title-upseller');
var h12 = document.querySelector('h1 span.title-upseller.acel');
var p = document.querySelector('p.txt-scroll1');
var delay = h1.innerHTML.length * speed + speed;
setTimeout(function(){
    p.style.opacity = "1";
    typeEffect(p, speedp);
  }, 0);
setTimeout(function(){
    h1.style.opacity = "1";
    typeEffect(h1, speed);
  }, 1000);
  setTimeout(function(){
      h12.style.opacity = "1";
    typeEffect(h12, speedtwo);
  }, 1800);
const acloser = document.querySelector('.acloser');
const videoHome = document.querySelector('#videoHome');
const videoContainer = document.querySelector('#videoContainer');
const backdrop = document.querySelector('.modal-backdrop');


backdrop.addEventListener('click', () => {
    videoHome.remove();
    videoContainer[0].pause();
    }
)