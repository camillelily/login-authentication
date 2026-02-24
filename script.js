 const form = document.querySelector("form");
const sucesso = document.getElementById("sucesso");

// Usuário e senha "corretos"
const usuarioCorreto = "admin";
const senhaCorreta = "1234";

form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede recarregar a página

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (usuario === "" || senha === "") {
    alert("Preencha todos os campos!");
  } else if (usuario === usuarioCorreto && senha === senhaCorreta) {
    // Esconde o formulário
    document.querySelector(".quadro").style.display = "none";
    // Mostra a mensagem de sucesso
    sucesso.style.display = "block";
  } else {
    alert("Usuário ou senha incorretos!");
  }
});
