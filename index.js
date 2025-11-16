document.addEventListener('DOMContentLoaded', () => {
  // --- LÓGICA DO CARROSSEL SUPERIOR ---
  const carouselItems = document.querySelectorAll('.carousel-item');
  const navButtons = document.querySelectorAll('.nav-button');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    currentSlide = index >= carouselItems.length ? 0 : index < 0 ? carouselItems.length - 1 : index;
    carouselItems.forEach(item => item.classList.remove('active'));
    navButtons.forEach(button => button.classList.remove('active'));
    if (carouselItems[currentSlide]) {
      carouselItems[currentSlide].classList.add('active');
    }
    if (navButtons[currentSlide]) {
      navButtons[currentSlide].classList.add('active');
    }
  }

  function startSlideShow() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const slideIndex = parseInt(button.dataset.slide, 10);
      showSlide(slideIndex);
      startSlideShow();
    });
  });

  if (carouselItems.length > 0) {
    showSlide(currentSlide);
    startSlideShow();
  }

  // --- LÓGICA DO NOVO CARROSSEL DE ÁREAS DE ATUAÇÃO ---
  const atuacaoSlider = document.querySelector('.atuacao-slider');
  const prevButton = document.getElementById('prev-atuacao');
  const nextButton = document.getElementById('next-atuacao');
  const cards = document.querySelectorAll('.card-atuacao');

  if (atuacaoSlider && prevButton && nextButton && cards.length > 0) {
    let currentIndex = 0;
    let itemsPerPage = 3; // Padrão para desktop

    const updateItemsPerPage = () => {
      if (window.innerWidth <= 768) {
        itemsPerPage = 1; // 1 card por vez em telas menores
      } else {
        itemsPerPage = 3; // 3 cards por vez em telas maiores
      }
    };

    const updateSliderPosition = () => {
      const cardWidth = cards[0].offsetWidth;
      const gap = 20; // O mesmo valor do 'gap' no CSS
      const totalWidth = cardWidth + gap;
      atuacaoSlider.style.transform = `translateX(-${currentIndex * totalWidth}px)`;
      
      // Habilita/desabilita botões
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex >= cards.length - itemsPerPage;
