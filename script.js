const form = document.querySelector("form");
const sucesso = document.getElementById("sucesso");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  if (!usuario || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    const resposta = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ usuario, senha })
    });

    const dados = await resposta.json();

    if (dados.sucesso) {
      document.querySelector(".quadro").style.display = "none";
      sucesso.style.display = "block";
    } else {
      alert("Usuário ou senha incorretos!");
    }

  } catch (error) {
    alert("Erro ao conectar com o servidor");
    console.log(error);
  }
});