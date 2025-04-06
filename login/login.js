document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return;
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const cpf = document.getElementById('cpf').value.trim();
      const senha = document.getElementById('senha').value.trim();
  
      if (!cpf || !senha) {
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
  
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.cpf === cpf);
  
      if (!user) {
        showError('CPF não encontrado. Cadastre-se para continuar.');
        alert('CPF não encontrado. Cadastre-se para continuar.');
        return;
      }
  
      if (user.senha !== senha) {
        showError('Senha incorreta.');
        alert('Senha incorreta.');
        return;
      }
  
      localStorage.setItem('currentUser', JSON.stringify(user));
      alert('Login realizado com sucesso');
      window.location.href = '../index.html';
    });
  });
  