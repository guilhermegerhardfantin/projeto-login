// definindo as variaveis
let nome = document.querySelector("#nome");
let senha = document.querySelector("#senha");
let form = document.querySelector("#login-form");
let usuariocerto = "admin";
let senhacerta = "123";
// Fim das variaveis
function login(event) {
  event.preventDefault();

  if (nome.value == usuariocerto && senha.value == senhacerta) {
    alert('Login realizado com sucesso!')
    form.requestFullscreen()
  }else{
alert("Usuario ou senha incorretos")
  }
}
// escutando o evento de evente de enviar o form

form.addEventListener("submit", login)
