document.addEventListener('DOMContentLoaded', () => {
  const cadastroForm = document.getElementById('cadastroForm');
  if (!cadastroForm) return;

  cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!nome || !cpf || !senha) {
      showError('Por favor, preencha todos os campos');
      return;
    }

    if (!isValidCPF(cpf)) {
      showError('CPF inválido. Deve conter 11 dígitos numéricos.');
      return;
    }

    if (!isValidSenha(senha)) {
      showError('Senha muito curta. Mínimo 6 caracteres.');
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

    if (existingUsers.some(user => user.cpf === cpf)) {
      showError('Usuário com este CPF já existe');
      return;
    }

    const newUser = { nome, cpf, senha };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Usuário cadastrado com sucesso!');
    window.location.href = '../login.html';
  });
});
