// preloader

setTimeout(function () {
  $("#pre").fadeToggle();
}, 2500);

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

//nav button effect

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("nav_btn");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
// slider

// aos
AOS.init();
