
document.addEventListener('DOMContentLoaded', () => {
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let valid = true;

    const setError = (input, message) => {
    input.classList.add('input-error');
    input.setCustomValidity(message);
    input.reportValidity();
    valid = false;
    };

    const clearError = (input) => {
    input.classList.remove('input-error');
    input.setCustomValidity('');
    };

    const nome = document.getElementById('nome');
    clearError(nome);
    if (!nome.value.trim() || nome.value.trim().length < 3) {
    setError(nome, 'Digite seu nome completo (mínimo 3 letras).');
    }

    const cpf = document.getElementById('cpf');
    clearError(cpf);
    if (!/^\d{11}$/.test(cpf.value.trim())) {
    setError(cpf, 'CPF inválido. Deve conter 11 dígitos numéricos.');
    }

    const email = document.getElementById('email');
    clearError(email);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    setError(email, 'E-mail inválido.');
    }

    const telefone = document.getElementById('telefone');
    clearError(telefone);
    if (!/^\d{8,15}$/.test(telefone.value.trim())) {
    setError(telefone, 'Telefone inválido. Use apenas números (mínimo 8 dígitos).');
    }

    const cep = document.getElementById('cep');
    clearError(cep);
    if (!/^\d{8}$/.test(cep.value.trim())) {
    setError(cep, 'CEP inválido. Deve conter 8 dígitos.');
    }

    const termos = document.getElementById('termos');
    if (!termos.checked) {
    termos.setCustomValidity('Você deve aceitar os termos.');
    termos.reportValidity();
    valid = false;
    } else {
    termos.setCustomValidity('');
    }

    if (valid) {
    alert('Inscrição realizada com sucesso!');
    form.reset();
    }
});
});
