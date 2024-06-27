const form = document.getElementById('cadastroForm');
const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confirmaSenha');
const telefoneInput = document.getElementById('telefone');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Verificar se as senhas coincidem
  if (senhaInput.value !== confirmaSenhaInput.value) {
    confirmaSenhaInput.setCustomValidity('As senhas não coincidem');
  } else {
    confirmaSenhaInput.setCustomValidity('');
  }
  
  // Validar formato do telefone
  const telefonePattern = /^[0-9]{2} [0-9]{4}-[0-9]{4}$/;
  if (!telefonePattern.test(telefoneInput.value)) {
    telefoneInput.setCustomValidity('Formato de telefone inválido. Use (99) 9999-9999');
  } else {
    telefoneInput.setCustomValidity('');
  }
  
  // Submeter o formulário se tudo estiver válido
  if (form.checkValidity()) {
    form.submit();
  }
});