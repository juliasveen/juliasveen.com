document.addEventListener("DOMContentLoaded", () => {
  
  // --- UI ELEMENTS ---
  const hamburgerMenu = document.querySelector('.nav-icon');
  const navContent = document.querySelector('#nav-content');
  const closeNavButton = document.querySelector('.close-btn');
  const scrollButton = document.querySelector(".scroll-top");
  
  // --- PROJECT MODAL ELEMENTS ---
  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.querySelector('.modal-close');

  // Navigation Logic
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

  // --- PROJECT POP-UP LOGIC ---
  if (projectCards.length > 0 && projectModal) {
    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        // Extract data from HTML attributes
        const title = card.getAttribute('data-title') || "Project";
        const desc = card.getAttribute('data-desc') || "No description provided.";
        const img = card.getAttribute('data-img') || "";
        const link = card.getAttribute('data-link') || "#";

        // Fill the modal
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = desc;
        document.getElementById('modal-img').src = img;
        document.getElementById('modal-github').href = link;
        document.getElementById('modal-title-bar').innerText = title + ".SYS";

        // Show the modal
        projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
      });
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      projectModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
  }

  // Close if clicking the dark overlay background
  window.addEventListener('click', (event) => {
    if (event.target === projectModal) {
      projectModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
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
});