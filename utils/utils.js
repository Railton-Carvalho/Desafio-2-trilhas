// CPF simples: 11 dígitos numéricos
function isValidCPF(cpf) {
    return /^\d{11}$/.test(cpf);
  }
  
  // Senha com pelo menos 6 caracteres
  function isValidSenha(senha) {
    return senha.length >= 6;
  }
  
  // Função auxiliar para mostrar erros
  function showError(message) {
    const errorContainer = document.getElementById('errorContainer');
    const errorText = document.getElementById('errorText');
  
    if (errorContainer && errorText) {
      errorText.textContent = message;
      errorContainer.classList.add('error-visible');
  
      setTimeout(() => {
        errorContainer.classList.remove('error-visible');
      }, 3000);
    }
  }
  