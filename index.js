// Lógica do Carrossel
window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.carousel-item');
  let current = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.remove('active');
      // Z-index não é estritamente necessário com display:none/block, mas mantido por segurança
      item.style.zIndex = i === index ? 2 : 1; 
    });
    items[index].classList.add('active');
  }

  if (items.length > 0) {
    showSlide(current);

    setInterval(() => {
      current = (current + 1) % items.length;
      showSlide(current);
    }, 4000);
  }
});

// Lógica das Abas (Notícias e Artigos)
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab; // Pega o valor de data-tab (ex: "noticias")
      const targetContent = document.getElementById(targetId + '-content'); // Monta o ID (ex: "noticias-content")

      // Remove 'active' de todos os botões e conteúdos
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Adiciona 'active' apenas no botão clicado e no conteúdo correspondente
      tab.classList.add('active');
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});
