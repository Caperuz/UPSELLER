const navbar_toggler = document.querySelector('.navbar-toggler');
const navbarhr = document.querySelector('.navbar');
navbar_toggler.addEventListener('click', () =>{
    navbarhr.classList.toggle('clase');
});

// window.addEventListener('scroll', () => {
//     const cartel = document.querySelector('.cartel_data');
//     const ubicartel = cartel.getBoundingClientRect();
//     console.log(ubicartel);

//     if (ubicartel.top < 200) {
//         console.log('Llegaste hasta la imagen');
//         cartel.classList.add('d-block');
//     } else {
//         console.log('scrollea más');
//     }
// })

// window.addEventListener('scroll', () => {
//     const bgpink = document.querySelector('.bg_pink');
//     const ubibgpink = bgpink.getBoundingClientRect();

//     if (ubibgpink.top < 700) {
//         console.log('Llegaste hasta la imagen');
//         bgpink.classList.add('d-block');
//     }
// })

// function scrollAppear(){
//     var introCartel = document.querySelector('.cartel_data');
//     var introPosition = introCartel.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight / 2;

//     if (introPosition < screenPosition) {
//         introCartel.classList.add('d-block');
//     }
// }
// window.addEventListener('scroll',scrollAppear);

let images = Array.from(document.querySelectorAll('img'));
let imagesScrollTop = images.map(image =>
    image.getBoundingClientRect().top - (innerHeight / 2)
    )
console.log(imagesScrollTop);

window.addEventListener('scroll', () => {
    imagesScrollTop.forEach( (el, i) =>{
        if (scrollY >= el){
            images[i].classList.add('animates');
        }
    })
});