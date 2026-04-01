// Wrap everything in DOMContentLoaded to ensure the HTML loads first
document.addEventListener("DOMContentLoaded", () => {
  
  // --- NAVIGATION & UI ELEMENTS ---
  const hamburgerMenu = document.querySelector('.nav-icon');
  const navContent = document.querySelector('#nav-content');
  const closeNavButton = document.querySelector('.close-btn');
  const scrollButton = document.querySelector(".scroll-top");
  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.querySelector('.modal-close');

  // Scroll Behavior (Protected with an IF statement)
  if (scrollButton) {
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
  }

  // Menu Toggle (Protected with IF statements)
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

  // --- TYPING EFFECT ---
  const typedText = document.getElementById('typed-text');
  
  // Only run the typing logic if the typed-text span actually exists on the page
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
        // Wait at the end of the word, then erase
        setTimeout(erase, 2000);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        // Move to the next word
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, 500);
      }
    }

    // Start the effect
    setTimeout(type, 1000);
  } else {
    console.warn("Typing effect skipped: Missing <span id='typed-text'></span> in HTML.");
  }

});

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Get data from the clicked card
        const title = card.getAttribute('data-title');
        const desc = card.getAttribute('data-desc');
        const img = card.getAttribute('data-img');
        const link = card.getAttribute('data-link');

        // Populate the modal
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = desc;
        document.getElementById('modal-img').src = img;
        document.getElementById('modal-github').href = link;
        document.getElementById('modal-title-bar').innerText = title + ".SYS";

        // Show the modal
        projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    });
});

// Close Modal logic
modalClose.addEventListener('click', () => {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close if clicking outside the window
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});