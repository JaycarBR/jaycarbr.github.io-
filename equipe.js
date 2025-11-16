document.addEventListener('DOMContentLoaded', () => {
  const membros = document.querySelectorAll('.membro');

  // Função para desativar todos os membros
  const deactivateAllMembers = () => {
    membros.forEach(m => m.classList.remove('active'));
  };

  membros.forEach(membro => {
    // Evento para mouse (desktop)
    membro.addEventListener('mouseenter', () => {
      // Em telas maiores, o hover ativa a descrição
      if (window.innerWidth > 768) {
        membro.classList.add('active');
      }
    });

    membro.addEventListener('mouseleave', () => {
      // Em telas maiores, o mouse a sair desativa
      if (window.innerWidth > 768) {
        membro.classList.remove('active');
      }
    });

    // Evento de clique para toque (mobile/tablet) e também para acessibilidade
    membro.addEventListener('click', (event) => {
      // Previne comportamento padrão se houver links dentro
      event.preventDefault();

      // Em telas menores, o clique alterna a visibilidade
      if (window.innerWidth <= 768) {
        const isActive = membro.classList.contains('active');
        
        // Primeiro, desativa todos para garantir que apenas um esteja ativo
        deactivateAllMembers();

        // Se não estava ativo, ativa agora
        if (!isActive) {
          membro.classList.add('active');
        }
      }
    });
  });

  // Opcional: fechar a descrição se clicar fora dos membros em mobile
  document.addEventListener('click', (event) => {
    if (window.innerWidth <= 768) {
      // Se o clique não foi dentro de um 'membro'
      if (!event.target.closest('.membro')) {
        deactivateAllMembers();
      }
    }
  });
});
