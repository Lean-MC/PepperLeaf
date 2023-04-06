


const sliderImages = document.querySelectorAll('.slider-image');
const sliderMainImage = document.querySelector('.slider-main-image img');
const sliderPrev = document.querySelector('#slider-prev');
const sliderNext = document.querySelector('#slider-next');

let currentImageIndex = 0;

sliderPrev.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex === 0) ? sliderImages.length - 1 : currentImageIndex - 1;
  sliderMainImage.src = sliderImages[currentImageIndex].src;
});

sliderNext.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex === sliderImages.length - 1) ? 0 : currentImageIndex + 1;
  sliderMainImage.src = sliderImages[currentImageIndex].src;
});


const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const downloadBtn = document.getElementById("downloadBtn");

// Función para comprobar si ambos campos de entrada están completos
function checkInputs() {
  if (input1.value && input2.value) {
    downloadBtn.disabled = false;
  } else {
    downloadBtn.disabled = true;
  }
}


// Escuchar cambios en los campos de entrada
input1.addEventListener("input", checkInputs);
input2.addEventListener("input", checkInputs);




