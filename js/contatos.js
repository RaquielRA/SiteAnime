const submitBtn = document.getElementById('submitBtn');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');
const feedbackMessage = document.getElementById('feedbackMessage');

// Validação do formulário
function validateForm() {
  feedbackMessage.textContent = '';
  feedbackMessage.classList.remove('success', 'error');

  // Verifica se o campo nome está vazio
  if (nomeInput.value.trim() === '') {
    feedbackMessage.textContent = 'Por favor, preencha o campo nome.';
    feedbackMessage.classList.add('error');
    document.querySelector('.formulario_main form').appendChild(feedbackMessage);
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    return false;
  }

  // Verifica se o campo email está vazio
  if (emailInput.value.trim() === '') {
    feedbackMessage.textContent = 'Por favor, preencha o campo email.';
    feedbackMessage.classList.add('error');
    document.querySelector('.formulario_main form').appendChild(feedbackMessage);
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    return false;
  }

  // Verifica se o email tem um formato válido
  if (!validateEmail(emailInput.value.trim())) {
    feedbackMessage.textContent = 'Por favor, insira um email válido.';
    feedbackMessage.classList.add('error');
    document.querySelector('.formulario_main form').appendChild(feedbackMessage);
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    return false;
  }

  // Verifica se o campo mensagem está vazio
  if (mensagemInput.value.trim() === '') {
    feedbackMessage.textContent = 'Por favor, escreva uma mensagem.';
    feedbackMessage.classList.add('error');
    document.querySelector('.formulario_main form').appendChild(feedbackMessage);
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    return false;
  }

  // Exibe mensagem de sucesso
  feedbackMessage.textContent = 'Formulário enviado com sucesso!';
  feedbackMessage.classList.add('success');
  document.querySelector('.formulario_main form').appendChild(feedbackMessage);

  // Limpa o formulário após 5 segundos
  setTimeout(clearForm, 5000);

  return true;
}

// Verifica o formato do email
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Limpa os campos do formulário e a mensagem de feedback
function clearForm() {
  nomeInput.value = '';
  emailInput.value = '';
  mensagemInput.value = '';
  feedbackMessage.textContent = '';
  feedbackMessage.classList.remove('success', 'error');
}

// Adiciona evento de clique no botão para validar o formulário
submitBtn.addEventListener('click', function (event) {
  event.preventDefault(); // Impede o envio do formulário diretamente
  if (validateForm()) {
    console.log('Formulário enviado');
  }
});
