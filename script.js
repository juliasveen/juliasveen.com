document.addEventListener("DOMContentLoaded", () => {
  
  // --- NAVIGATION & UI ELEMENTS ---
  const hamburgerMenu = document.querySelector('.nav-icon');
  const navContent = document.querySelector('#nav-content');
  const closeNavButton = document.querySelector('.close-btn');
  const navLinks = document.querySelectorAll('#nav-content a');

  if (hamburgerMenu && navContent) {
    hamburgerMenu.addEventListener('click', () => {
      navContent.classList.add('show');
      document.body.style.overflow = "hidden";
    });
  }

  if (closeNavButton && navContent) {
    closeNavButton.addEventListener('click', () => {
      navContent.classList.remove('show');
      document.body.style.overflow = "auto";
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navContent.classList.remove('show');
      document.body.style.overflow = "auto";
    });
  });

  // --- TYPING EFFECT ---
  const typedText = document.getElementById('typed-text');
  if (typedText) {
    const textArray = ['IT Leader', 'Aspiring AI Engineer', 'Data Scientist', 'Tech Enthusiast'];
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
    setTimeout(type, 1000);
  }

  // --- SPOTIFY (LANYARD) SYSTEM ---
  // We move this INSIDE the DOMContentLoaded block so it can see the HTML elements
// --- SPOTIFY (LANYARD) SYSTEM ---
  let isListening = false; // Global flag to tell the bars when to move

  async function updateSpotify() {
    try {
      // We use a relative path so Vercel knows to look at its own /api folder
      const response = await fetch('./api/now-playing');
      const data = await response.json();

      const trackName = document.getElementById('track-name');
      const trackArtist = document.getElementById('track-artist');
      const trackArt = document.getElementById('track-art');

      if (data.isPlaying) {
        isListening = true; 
        trackName.innerText = data.title.toUpperCase();
        trackArtist.innerText = data.artist.toUpperCase();
        trackArt.src = data.albumImageUrl;
      } else {
        isListening = false;
        trackName.innerText = "NOT LISTENING";
        trackArtist.innerText = "SPOTIFY OFFLINE";
        trackArt.src = "images/placeholder_art.png";
        document.querySelectorAll('.bar').forEach(bar => bar.style.height = "5px");
      }
    } catch (error) {
      console.error("Spotify API Error:", error);
    }
  }

  function animateVisualizer() {
    if (isListening) {
      document.querySelectorAll('.bar').forEach(bar => {
        const randomHeight = Math.floor(Math.random() * 25) + 5;
        bar.style.height = `${randomHeight}px`;
      });
    }
    setTimeout(animateVisualizer, 300); 
  }

  // Initial call and intervals
  updateSpotify();
  animateVisualizer();
  setInterval(updateSpotify, 5000);
});