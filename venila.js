const bt1 = document.getElementById("bt-1");
const bt2 = document.getElementById("bt-2");
const up1 = document.getElementById("up1");
const up2 = document.getElementById("up2");
const up3 = document.getElementById("up3");
const b1 = document.getElementById("b1");
const word = ["Offline Section", "31 aug 2024", "10 out of 15"];
const word1 = ["Online Section", "29 june 2024", "4 out of 15"];
const btnen = document.getElementById("btn-en");
const databox = document.getElementById("databox");
let color1 = "rgb(142, 92, 186)";
const anchor = document.getElementById("anchor");

function toggleBtn1() {
  bt1.style.backgroundColor = "white";
  bt1.style.color = "black";
  bt2.style.backgroundColor = color1;
  bt2.style.color = "white";
  up1.innerText = word[0];
  up2.innerText = word[1];
  up3.innerText = word[2];
  up1.style.backgroundColor = "white";
  btnen.style.backgroundColor = "white";
  btnen.style.color = color1;
  b1.style.color = "white";
  up1.style.color = color1;
  b1.style.backgroundColor = color1;
  b1.style.transform = "rotateY(360deg)";
  anchor.style.color = color1;
}
function toggleBtn2() {
  b1.style.transform = "rotateY(0deg)";
  bt2.style.backgroundColor = "white";
  bt2.style.color = "black";
  bt1.style.backgroundColor = color1;
  bt1.style.color = "white";
  up1.innerText = word1[0];
  up2.innerText = word1[1];
  up3.innerText = word1[2];
  up1.style.backgroundColor = color1;
  btnen.style.backgroundColor = color1;
  btnen.style.color = "white";
  b1.style.color = "black";
  up1.style.color = "white";
  b1.style.backgroundColor = "white";
  anchor.style.color = "white";
}

const ch1 = document.getElementById("ch-1");
const ch2 = document.getElementById("ch-2");
const ch3 = document.getElementById("ch-3");
//const ch4 = document.getElementById("ch-4");
const chh1 = document.getElementById("ch-h-1");
const chh2 = document.getElementById("ch-h-2");
const chh3 = document.getElementById("ch-h-3");
//const chh4 = document.getElementById("ch-h-4");
ch1.style.height = "25vmin";
ch2.style.height = "25vmin";
ch3.style.height = "25vmin";
//ch4.style.height = "25vmin";
let x1 = ch1.style.height;
let x2 = ch2.style.height;
let x3 = ch3.style.height;
//let x4 = ch4.style.height;

function blueBGAdd() {
  chh1.classList.remove("clrtoggle");
  chh2.classList.remove("clrtoggle");
  chh3.classList.remove("clrtoggle");
  // chh4.classList.remove("clrtoggle");
  chh1.classList.remove("div");
  chh2.classList.remove("div");
  chh3.classList.remove("div");
  //chh4.classList.remove("div");
}

function openChap(s) {
  blueBGAdd();
  switch (s) {
    case 1:
      x1 = ch1.style.height;
      if (x1 == "25vmin") {
        chh1.classList.add("clrtoggle");
        chh1.classList.add("div");
        ch1.style.height = "max-content";
        ch2.style.height = "25vmin";
        ch3.style.height = "25vmin";
        //ch4.style.height = "25vmin";
      } else {
        chh1.classList.remove("clrtoggle");
        chh1.classList.remove("div");
        ch1.style.height = "25vmin";
        ch2.style.height = "25vmin";
        ch3.style.height = "25vmin";
        //ch4.style.height = "25vmin";
      }
      break;
    case 2:
      x1 = ch2.style.height;
      if (x1 == "25vmin") {
        chh2.classList.add("clrtoggle");
        chh2.classList.add("div");
        ch1.style.height = "25vmin";
        ch2.style.height = "max-content";
        ch3.style.height = "25vmin";
        // ch4.style.height = "25vmin";
      } else {
        chh2.classList.remove("clrtoggle");
        chh2.classList.remove("div");
        ch1.style.height = "25vmin";
        ch2.style.height = "25vmin";
        ch3.style.height = "25vmin";
        // ch4.style.height = "25vmin";
      }
      break;
    case 3:
      x1 = ch3.style.height;
      if (x1 == "25vmin") {
        chh3.classList.add("clrtoggle");
        chh3.classList.add("div");
        ch1.style.height = "25vmin";
        ch2.style.height = "25vmin";
        ch3.style.height = "max-content";
        //ch4.style.height = "25vmin";
      } else {
        chh3.classList.remove("clrtoggle");
        chh3.classList.remove("div");
        ch1.style.height = "25vmin";
        ch2.style.height = "25vmin";
        ch3.style.height = "25vmin";
        //ch4.style.height = "25vmin";
      }
      break;
    // case 4:
    //   x1 = ch4.style.height;
    //   if (x1 == "25vmin") {
    //     chh4.classList.add("clrtoggle");
    //     chh4.classList.add("div");
    //     ch1.style.height = "25vmin";
    //     ch2.style.height = "25vmin";
    //     ch3.style.height = "25vmin";
    //     ch4.style.height = "max-content";
    //   } else {
    //     chh4.classList.remove("clrtoggle");
    //     chh4.classList.remove("div");
    //     ch1.style.height = "25vmin";
    //     ch2.style.height = "25vmin";
    //     ch3.style.height = "25vmin";
    //     ch4.style.height = "25vmin";
    //   }
    //   break;

    default:
      console.log("hi");
      ch1.style.height = "25vmin";
      ch2.style.height = "25vmin";
      ch3.style.height = "25vmin";
      // ch4.style.height = "25vmin";
      break;
  }
}
const inna = document.getElementById("in-name");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    
  } else {
    document.getElementById("header").style.top = "-10vh";
    
  }
  prevScrollpos = currentScrollPos;
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

    gsap.registerPlugin(ScrollTrigger)

  //   gsap.from("#h12",{
  //     scrollTrigger:{
  //         trigger:"#h12",
  //         scrub:1,
  //     },
  //     Opacity:0,
  //     yPercent:100,
  //     duration:0.2
  // })

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);