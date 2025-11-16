document.addEventListener('DOMContentLoaded', () => {
  const membros = document.querySelectorAll('.membro');

  membros.forEach(membro => {
    membro.addEventListener('click', () => {
      // Verifica se o membro clicado já está ativo
      const isActive = membro.classList.contains('active');

      // Primeiro, remove a classe 'active' de todos os membros
      membros.forEach(m => {
        m.classList.remove('active');
      });

      // Se o membro clicado não estava ativo, ativa-o.
      // Se já estava, o passo anterior já o desativou.
      if (!isActive) {
        membro.classList.add('active');
      }
    });
  });

  // Opcional: Adiciona um listener para fechar o card ativo se o usuário clicar fora
  document.addEventListener('click', (event) => {
    // Verifica se o clique foi fora de qualquer elemento '.membro'
    if (!event.target.closest('.membro')) {
      membros.forEach(m => {
        m.classList.remove('active');
      });
    }
  });
});
