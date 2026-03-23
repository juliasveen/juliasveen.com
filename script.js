const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");

// scroll TOP Button Events

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}

// Hamburger Menu events
hamburgerMenu.addEventListener('click', ()=>{
  navContent.classList.add('show');
  document.body.style.overflow = "hidden"; // Prevents background scrolling when menu is open
});

closeNavButton.addEventListener('click', ()=>{
  navContent.classList.remove('show');
  document.body.style.overflow = "auto"; // Restores scrolling
});

// Update the scroll logic for better browser support
window.addEventListener('scroll', ()=> {
    if(window.scrollY > (window.innerHeight * 1.2)){
      scrollButton.style.display = "flex";
    } else {
      scrollButton.style.display = "none";
    }
});

// Typing Effect Code
const typedText = document.getElementById('typed-text');
const textArray = ['Aspiring Data Analyst', 'IT Leader', 'Tech Enthusiast'];
const typingDelay = 100;
const erasingDelay = 75;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", type);