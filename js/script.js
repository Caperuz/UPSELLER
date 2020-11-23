const navbar_toggler = document.querySelector('.navbar-toggler');
const navbarhr = document.querySelector('.navbar');
navbar_toggler.addEventListener('click', () =>{
    navbarhr.classList.toggle('bgblank');
});
window.addEventListener('scroll', () => {
    const bgpink = document.querySelector('.bg_pink');
    const aboutTitle = document.querySelector('.about-title');
    const ubibgpink = bgpink.getBoundingClientRect();
    const txtaboutusP = document.querySelector('.p-about-us');
    const manchar = document.querySelector('.manchar');
    const mancharIzq = document.querySelector('.mancharIzq');
    if (ubibgpink.top < 500) {
        bgpink.classList.add('fadeIn');
        aboutTitle.classList.add('d-block', 'animate__fadeInDown');
        aboutTitle.style.setProperty('--animate-duration', '2s');
        txtaboutusP.classList.add('d-block', 'animate__fadeInDown');
        txtaboutusP.style.setProperty('--animate-duration', '2s');
        manchar.classList.add('d-block', 'animate__backInRight');
        manchar.style.setProperty('--animate-duration', '2s');
        mancharIzq.classList.add('d-block', 'animate__backInLeft');
        mancharIzq.style.setProperty('--animate-duration', '2s');
    }
});
window.addEventListener('scroll', () => {
    const ourmodel = document.getElementById('ourmodel');
    const ubiourmodel = ourmodel.getBoundingClientRect();
    const sectionHeading = document.querySelector('.section-heading.AgH2.animate__animated');
    
    if (ubiourmodel.top < 800) {
        sectionHeading.classList.add('d-block', 'animate__fadeInDown');
        sectionHeading.style.setProperty('--animate-duration', '2s');
    }
});
window.addEventListener('scroll', () => {
    const services = document.getElementById('services');
    const ubiservices = services.getBoundingClientRect();
    const ourServices = document.querySelector('.our_services');
    const arrowServices = document.querySelector('.arrow-services');

    if (ubiservices.top < 600) {
        ourServices.classList.add('d-flex', 'animate__fadeInDown');
        ourServices.style.setProperty('--animate-duration', '2s');
        arrowServices.classList.add('d-flex', 'animate__fadeInDown');
        arrowServices.classList.remove('d-none');
        arrowServices.style.setProperty('--animate-duration', '2.5s');
    }
});
window.addEventListener('scroll', () => {
    const cartel = document.querySelector('.cartel_data');
    const ubicartel = cartel.getBoundingClientRect();

    if (ubicartel.top < 700) {
        cartel.classList.add('fadeIn');
    }
});
window.addEventListener('scroll', () => {
    const hand = document.querySelector('.hand');
    const thehand = hand.getBoundingClientRect();

    if (thehand.top < 1500) {
        hand.classList.add('handIn', 'enchufa');
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

    if (ubimarketplace.top < 700) {
        marketplace.classList.add('fadeIn');
    }
});
window.addEventListener('scroll', () => {
    const hand_blue = document.querySelector('.hand_blue.mobile');
    const thehand_blue = hand_blue.getBoundingClientRect();

    if (thehand_blue.top < 1500) {
        hand_blue.classList.add('handIn', 'enchufa');
    }
});
window.addEventListener('scroll', () => {
    const hand_blue_desktop = document.querySelector('.hand_blue.desktop');
    const thehand_blue_desktop = hand_blue_desktop.getBoundingClientRect();

    if (thehand_blue_desktop.top < 1500) {
        hand_blue_desktop.classList.add('handIn', 'enchufa');
    }
});
window.addEventListener('scroll', () => {
    const manchas = document.querySelector('.manchas');
    const themanchas = manchas.getBoundingClientRect();

    if (themanchas.top < 500) {
        manchas.classList.add('manchasIn');
    }
});
window.addEventListener('scroll', () => {
    const city = document.querySelector('.city');
    const thecity = city.getBoundingClientRect();

    if (thecity.top < 500) {
        city.classList.add('cityIn');
    }
});
window.addEventListener('scroll', () => {
    const city = document.querySelector('.people');
    const thepeople = people.getBoundingClientRect();

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
const videoHome = document.querySelector('#videoHome');
videoHome.addEventListener('click', () => {
     location.reload();
    }
)