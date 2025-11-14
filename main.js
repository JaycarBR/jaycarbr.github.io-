window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.carousel-item');
  let current = 0;

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.remove('active');
      item.style.zIndex = i === index ? 2 : 1;
    });
    items[index].classList.add('active');
  }

  showSlide(current);

  setInterval(() => {
    current = (current + 1) % items.length;
    showSlide(current);
  }, 4000);
});
