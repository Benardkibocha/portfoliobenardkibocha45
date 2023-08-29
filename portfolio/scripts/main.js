// scripts/main.js
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});


// scripts/main.js
const imageSlider = document.querySelector('.image-slider');
let currentIndex = 0;

function showImage(index) {
  const images = imageSlider.querySelectorAll('.slide');
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
}

document.querySelector('.next-button').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.querySelector('.prev-button').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});


// scripts/main.js
const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', (event) => {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');

  if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
    event.preventDefault();
    alert('Please fill in all fields');
  }
});

// scripts/main.js
const projectButtons = document.querySelectorAll('.project-button');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectDetails = button.parentElement.querySelector('.project-details');
    projectDetails.classList.toggle('visible');
  });
});

