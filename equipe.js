document.querySelectorAll('.membro').forEach(membro => {
  membro.addEventListener('mouseenter', () => {
    const descricao = membro.querySelector('.descricao-membro');

    if (window.innerWidth > 768) {
      descricao.style.opacity = '1';
      descricao.style.pointerEvents = 'auto';

      const next = membro.nextElementSibling;
      if (next && next.classList.contains('membro')) {
        next.style.marginLeft = '270px';
      }
    } else {
      descricao.style.opacity = '1';
      descricao.style.pointerEvents = 'auto';
    }
  });

  membro.addEventListener('mouseleave', () => {
    const descricao = membro.querySelector('.descricao-membro');
    descricao.style.opacity = '0';
    descricao.style.pointerEvents = 'none';

    const next = membro.nextElementSibling;
    if (next && next.classList.contains('membro')) {
      next.style.marginLeft = '0px';
    }
  });
});
