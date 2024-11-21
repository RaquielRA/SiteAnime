// Selecionando os elementos do formulário e o botão de envio
const submitBtn = document.getElementById('submitBtn');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');
const feedbackMessage = document.getElementById('feedbackMessage');  // Certifique-se de ter esse elemento no HTML

// Função para validar o formulário
function validateForm() {
  // Remover mensagens anteriores
  feedbackMessage.textContent = '';
  feedbackMessage.classList.remove('success', 'error');

  // Validação dos campos
  if (nomeInput.value.trim() === '') {
    feedbackMessage.textContent = 'Por favor, preencha o campo nome.';
    feedbackMessage.classList.add('error');
    document.querySelector('.formulario_main form').appendChild(feedbackMessage);
    // Desaparece após 2 segundos
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    return false;
  }

  if (emailInput.value.trim() === '') {
    feedbackMessage.textContent = 'Por favor, preencha o campo email.';
    feedbackMessage.classList.add('error');
    document.querySelector('.formulario_main form').appendChild(feedbackMessage);
    // Desaparece após 2 segundos
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    return false;
  }

  if (!validateEmail(emailInput.value.trim())) {
    feedbackMessage.textContent = 'Por favor, insira um email válido.';
    feedbackMessage.classList.add('error');
    document.querySelector('.formulario_main form').appendChild(feedbackMessage);
    // Desaparece após 2 segundos
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    return false;
  }

  if (mensagemInput.value.trim() === '') {
    feedbackMessage.textContent = 'Por favor, escreva uma mensagem.';
    feedbackMessage.classList.add('error');
    document.querySelector('.formulario_main form').appendChild(feedbackMessage);
    // Desaparece após 2 segundos
    setTimeout(() => {
      feedbackMessage.style.display = 'none';
    }, 2000);
    return false;
  }

  // Se tudo estiver correto, mensagem de sucesso
  feedbackMessage.textContent = 'Formulário enviado com sucesso!';
  feedbackMessage.classList.add('success');
  document.querySelector('.formulario_main form').appendChild(feedbackMessage);

  // Limpa o formulário após 5 segundos
  setTimeout(clearForm, 5000);

  return true;
}

// Função para validar o formato do email
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Função para limpar o formulário
function clearForm() {
  // Limpa os campos de texto
  nomeInput.value = '';
  emailInput.value = '';
  mensagemInput.value = '';

  // Remove a mensagem de feedback após limpar
  feedbackMessage.textContent = '';
  feedbackMessage.classList.remove('success', 'error');
}

// Adicionando o evento de clique no botão de enviar
submitBtn.addEventListener('click', function (event) {
  event.preventDefault();  // Impede o envio do formulário

  if (validateForm()) {
    // Aqui, você pode adicionar qualquer lógica para enviar os dados do formulário, como um POST AJAX
    console.log('Formulário enviado');
  }
});
