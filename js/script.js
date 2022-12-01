window.addEventListener("scroll", function () {
  let navBar = this.document.querySelector("nav");
  if (this.window.pageYOffset >= 600) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
});

var typed3 = new Typed(".type", {
  strings: [
    "Let's make ourselves <br> <i>efficient</i>",
    "Let's make ourselves <br> <strong>skilled</strong>",
    "Let's make ourselves <br> expert",
  ],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true,
});

var navMenu = document.getElementById("menu");
function showMenu() {
  m1.style.marginLeft = "0";
  m2.style.marginLeft = "7px";
  m3.style.marginLeft = "0";
  m4.style.marginLeft = "9px";
  m5.style.marginLeft = "0";
  m6.style.marginLeft = "7px";
  bar.style.top = "-100px";
  hide.style.right = "20px";
}
function hideMenu() {
  m1.style.marginLeft = "200px";
  m2.style.marginLeft = "200px";
  m3.style.marginLeft = "200px";
  m4.style.marginLeft = "200px";
  m5.style.marginLeft = "200px";
  m6.style.marginLeft = "200px";
  bar.style.top = "8px";
  hide.style.right = "-200px";
}

// function showMenu() {
//   var x = document.getElementById("m1");
//   if (m1.style.marginLeft == "200px") {
//     m1.style.marginLeft = "0";
//   } else {
//     m1.style.marginLeft = "200px";
//   }
// }

// slider
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: true,
    stagePadding: 50,
    center: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        stagePadding: 0,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
});

//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".info");
//Items
const title = document.querySelector(".info");
const sneaker = document.querySelector(".sneaker");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 150;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 150;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(50px)";
  sneaker.style.transform = "translateZ(50px)";
});

//Animate Out

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});

// aos
AOS.init();
