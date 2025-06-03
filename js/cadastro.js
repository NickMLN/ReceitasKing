document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("formCadastro");

    formCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (email === "" || senha === "") {
            alert("Preencha todos os campos.");
            return;
        }


        const usuario = {
            email: email,
            senha: senha
        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        window.location.href = "../html/login.html"; 
    });
});
