const formCadastro = document.getElementById("cadastroForm");
const msg = document.getElementById("mensagemCadastro");

formCadastro.addEventListener("submit", (e) => {
	e.preventDefault();

	const nome = document.getElementById("nome").value.trim();
	const email = document.getElementById("email").value.trim();
	const usuario = document.getElementById("novoUsuario").value.trim();
	const senha = document.getElementById("novaSenha").value;
	const confirma = document.getElementById("confirmaSenha").value;

	msg.style.color = "#ff5252";

	if (!nome || !email || !usuario || !senha || !confirma) {
		msg.textContent = "Preencha todos os campos!";
	} else if (!email.includes("@")) {
		msg.textContent = "Informe um e-mail válido.";
	} else if (senha.length < 3) {
		msg.textContent = "A senha deve ter pelo menos 3 caracteres.";
	} else if (senha !== confirma) {
		msg.textContent = "As senhas não coincidem.";
	} else {
		msg.style.color = "#03dac6";
		msg.textContent = "Usuário cadastrado com sucesso!";
		formCadastro.reset();
	}
});
