document.querySelectorAll('.membro').forEach(membro => {
    membro.addEventListener('mouseenter', () => {
      const descricao = membro.querySelector('.descricao-membro');
      descricao.style.opacity = '1';
      descricao.style.pointerEvents = 'auto';

      // empurra o próximo membro se houver
      const next = membro.nextElementSibling;
      if (next && next.classList.contains('membro')) {
        next.style.marginLeft = '270px';
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

