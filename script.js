// Navigation Selectors
const hamburgerMenu = document.querySelector('.nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('.close-btn');
const scrollButton = document.querySelector(".scroll-top");

// 1. Scroll TOP Logic
window.addEventListener('scroll', () => {
  if (window.scrollY > (window.innerHeight * 0.5)) {
    scrollButton.style.display = "flex";
  } else {
    scrollButton.style.display = "none";
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 2. Navigation Toggle
hamburgerMenu.addEventListener('click', () => {
  navContent.classList.add('show');
  document.body.style.overflow = "hidden";
});

closeNavButton.addEventListener('click', () => {
  navContent.classList.remove('show');
  document.body.style.overflow = "auto";
});

// 3. Typing Effect Code
const typedText = document.getElementById('typed-text');
const textArray = ['Graphic Designer', '3D Artist', 'Video Editor', 'IT Leader']; // Updated with roles
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

document.addEventListener("DOMContentLoaded", () => {
    if (typedText) setTimeout(type, 500);
});