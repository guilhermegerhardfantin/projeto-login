// definindo as variaveis
let nome = document.querySelector("#nome");
let senha = document.querySelector("#senha");
let form = document.querySelector("#login-form");
let usuariocerto = "admin";
let senhacerta = "123";
let mensagem = document.querySelector("#mensagem");
// Fim das variaveis

function login(event) {
  event.preventDefault();
  mensagem.className = "";
  if (nome.value == usuariocerto && senha.value == senhacerta) {
    mensagem.textContent = "Login realizado com sucesso";
    mensagem.classList.add("sucesso");

    form.reset();
  } else {
    mensagem.textContent = "Usuario ou senha incorretos";
    mensagem.classList.add("erro");
  }

  // removendo mensagem de feedback apos x segundos

  setTimeout(() => {
    mensagem.className = "";
  }, 2000);
}

// escutando o evento de evente de enviar o form
form.addEventListener("submit", login);
