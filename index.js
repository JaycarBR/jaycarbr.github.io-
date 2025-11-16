document.addEventListener('DOMContentLoaded', () => {
  // --- LÓGICA DO CARROSSEL ---
  const carouselItems = document.querySelectorAll('.carousel-item');
  const navButtons = document.querySelectorAll('.nav-button');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Garante que o índice seja válido
    currentSlide = index >= carouselItems.length ? 0 : index < 0 ? carouselItems.length - 1 : index;

    // Esconde todos os slides e desativa todos os botões
    carouselItems.forEach(item => item.classList.remove('active'));
    navButtons.forEach(button => button.classList.remove('active'));

    // Mostra o slide correto e ativa o botão correspondente
    if (carouselItems[currentSlide]) {
      carouselItems[currentSlide].classList.add('active');
    }
    if (navButtons[currentSlide]) {
      navButtons[currentSlide].classList.add('active');
    }
  }

  function startSlideShow() {
    // Para o intervalo anterior para não ter múltiplos timers
    clearInterval(slideInterval);
    // Inicia um novo intervalo
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000); // Muda de slide a cada 5 segundos
  }

  // Adiciona evento de clique para cada botão de navegação
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const slideIndex = parseInt(button.dataset.slide, 10);
      showSlide(slideIndex);
      startSlideShow(); // Reinicia o timer para que o próximo slide demore 5s
    });
  });

  // Inicia o carrossel
  if (carouselItems.length > 0) {
    showSlide(currentSlide);
    startSlideShow();
  }

  // --- LÓGICA DAS ABAS (Notícias e Artigos) ---
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;
      const targetContent = document.getElementById(targetId + '-content');

      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});
