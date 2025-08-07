// S-Class Website

// Image change functionality for color buttons
function changeImage(imageSrc, button) {
  const mainImage = document.getElementById('main-image');
  const allButtons = document.querySelectorAll('.color-btn');
  
  // Remove active class from all buttons
  allButtons.forEach(btn => btn.classList.remove('active'));
  
  // Add active class to clicked button
  button.classList.add('active');
  
  // Change image with fade effect
  mainImage.style.opacity = '0';
  
  setTimeout(() => {
    mainImage.src = imageSrc;
    mainImage.style.opacity = '1';
  }, 200);
}

