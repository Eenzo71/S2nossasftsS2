document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");

  loginButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "q" && password === "1") {
      alert("Login bem-sucedido!");
      window.location.href = "https://codepen.io/enzo-emanuel/pen/dyaPZyj";
    } else {
      alert("Login falhou. Verifique o nome de Usuário e Senha.");
    }
  });
});
