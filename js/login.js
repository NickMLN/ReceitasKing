document.addEventListener("DOMContentLoaded", function () {
    const formLogin = document.getElementById("formLogin");

    formLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

        if (!usuarioSalvo) {
            alert("Nenhum usuário cadastrado.");
            return;
        }

        if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
            window.location.href = "../html/home.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    });
});
