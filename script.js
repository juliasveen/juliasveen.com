// Navigation Elements
const hamburgerMenu = document.querySelector('.nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('.close-btn');
const scrollButton = document.querySelector(".scroll-top");

// Scroll Behavior
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menu Toggle
hamburgerMenu.addEventListener('click', () => {
  navContent.classList.add('show');
  document.body.style.overflow = "hidden";
});

closeNavButton.addEventListener('click', () => {
  navContent.classList.remove('show');
  document.body.style.overflow = "auto";
});

// Typing Effect
const typedText = document.getElementById('typed-text');
const textArray = ['IT Leader', 'Aspiring AI Engineer', 'Data Analyst', 'Tech Enthusiast'];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));