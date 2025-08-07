// GSAP Animations for Mercedes-Benz Website

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Crafted word animations for the first section
gsap.from(".crafted-word1", {
  scrollTrigger: {
    trigger: ".crafted-word1",
    start: "top -35%",
    toggleActions: "play none none reverse"
  },
  opacity: 0.1,
  y: 50,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out"
});

gsap.from(".crafted-word2", {
  scrollTrigger: {
    trigger: ".crafted-word2",
    start: "top -40%",
    toggleActions: "play none none reverse"
  },
  opacity: 0.1,
  y: 50,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out"
});

gsap.from(".crafted-word3", {
  scrollTrigger: {
    trigger: ".crafted-word3",
    start: "top -45%",
    toggleActions: "play none none reverse"
  },
  opacity: 0.1,
  y: 50,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out"
});

// Fade in image animation
gsap.from(".fade-in-image", {
  scrollTrigger: {
    trigger: ".fade-in-image",
    start: "top -10%",
    scrub: 2,
    toggleActions: "play none none none"
  },
  opacity: 0,
  x: 150,
  duration: 1.5,
  ease: "power2.out"
});

// Grand opening text animation
gsap.from(".grand-opening-text", {
  scrollTrigger: {
    trigger: ".grand-opening-text",
    start: "top -8%",
    scrub: 2,
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 2,
  ease: "power3.out"
});

// Fade right animation
gsap.from(".fade-right", {
  scrollTrigger: {
    trigger: ".fade-right",
    start: "top -10%",
    toggleActions: "play none none none",
    scrub: 2
  },
  x: 100,
  opacity: 0,
  duration: 2,
  ease: "power2.out"
});

// Image container animation for rebellious section
gsap.from(".image-container", {
  scrollTrigger: {
    trigger: "#rebellious-section",
    start: "top -20",
    scrub: 2
  },
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
});

// Word animations for rebellious section
gsap.from(".word1", {
  scrollTrigger: {
    trigger: ".word1",
    start: "top -15%",
    end: "top 70%",
    toggleActions: "play none none none",
    scrub: 1.5
  },
  y: 100,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".word2", {
  scrollTrigger: {
    trigger: ".word2",
    start: "top -6%",
    end: "top 75%",
    toggleActions: "play none none none",
    scrub: 1.5
  },
  y: 100,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".word3", {
  scrollTrigger: {
    trigger: ".word3",
    start: "top -5%",
    end: "top 80%",
    toggleActions: "play none none none",
    scrub: 1.5
  },
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

// Word animations for second rebellious section
gsap.from(".word11", {
  scrollTrigger: {
    trigger: ".word11",
    start: "top -22%",
    scrub: 2,
  },
  x: -100,
  opacity: 0,
  duration: 3,
  ease: "power3.out"
});

gsap.from(".word22", {
  scrollTrigger: {
    trigger: ".word22",
    start: "top -10%",
    end: "top -20%",
    scrub: 2,
  },
  x: 100,
  opacity: 0,
  duration: 3,
  ease: "power3.out"
});

gsap.from(".word33", {
  scrollTrigger: {
    trigger: ".word33",
    start: "top 2%",
    scrub: 1,
  },
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

// Image animation for second rebellious section
gsap.from(".image-container22 img", {
  scrollTrigger: {
    trigger: "#rebellious-section",
    start: "top -110%",
    toggleActions: "play none none reverse"
  },
  x: 100,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out",
  scrub: 1
});

// Crafted section word animations
gsap.from(".crafted-word", {
  scrollTrigger: {
    trigger: "#crafted-section",
    start: "top -60%",
    toggleActions: "play none none reverse"
  },
  opacity: 0.1,
  x: -100,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out"
});

// Showcase wrapper animation
gsap.fromTo("#showcase-wrapper",
  { width: "7%" },
  { 
    width: "50vw",
    duration: 2, 
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#showcase-wrapper",
      start: "top -40%",
      toggleActions: "play none none reverse",
    }
  }
);

// Footer animations
gsap.utils.toArray(".footer-item").forEach((item) => {
  gsap.fromTo(item, 
    { opacity: 0.1 }, 
    { 
      opacity: 1,
      duration: 0.8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: item,
        start: "top -20%",
        toggleActions: "play none none none",
        scrub: 2
      }
    }
  );
});

// Border line animations
gsap.utils.toArray(".border-line").forEach((line) => {
  gsap.fromTo(line, 
    { width: "0%" }, 
    {
      width: "100%",
      duration: 3,
      ease: "none",
      scrollTrigger: {
        trigger: line.parentElement,
        start: "top -30%",
        scrub: 5,
        toggleActions: "play none none none"
      }
    }
  );
});

// Image change function
function changeImage(imageSrc, buttonElement) {
  const mainImage = document.getElementById('main-image');

  // Remove active class from all buttons
  const allButtons = document.querySelectorAll('.color-btn');
  allButtons.forEach(btn => btn.classList.remove('active'));

  // Add active class to clicked button
  if (buttonElement) {
    buttonElement.classList.add('active');
  }

  // Change image source directly without fade effect
  mainImage.src = imageSrc;
}

// Set the first button as active by default
window.addEventListener('load', function() {
  const firstButton = document.querySelector('.color-btn');
  if (firstButton) {
    firstButton.classList.add('active');
  }
}); 