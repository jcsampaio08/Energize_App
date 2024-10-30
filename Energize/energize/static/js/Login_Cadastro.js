document.getElementById('acessar').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio

    // Verifica se está na tela de cadastro
    let isCadastro = document.getElementById('email_cadastro') !== null;
    let validado = true;

    // Função para validação de e-mail
    function validaEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            validado = false;
        }
    }

    // Função para validação de senha
    function validaSenha(senha) {
        if (senha.length < 8) {
            alert('A senha deve ter no mínimo 8 caracteres.');
            validado = false;
        }
    }

    if (!isCadastro) {
        // Valida campos de login
        let emailLogin = document.getElementById('email_login').value;
        let senhaLogin = document.getElementById('senha_login').value;

        validaEmail(emailLogin);
        validaSenha(senhaLogin);
    } else {
        // Valida campos de cadastro
        let emailCadastro = document.getElementById('email_cadastro').value;
        let senhaCadastro = document.getElementById('senha_cadastro').value;
        let senhaRepetida = document.getElementById('Confirmasenha').value;

        validaEmail(emailCadastro);
        validaSenha(senhaCadastro);

        // Confirmação de senha
        if (senhaCadastro !== senhaRepetida) {
            validado = false;
            let inputSenhaRepetida = document.getElementById('Confirmasenha');
            inputSenhaRepetida.style.borderColor = 'red'; 
            let erroMsg = document.createElement('p');
            erroMsg.textContent = 'As senhas não coincidem.';
            erroMsg.classList.add('erro-senha-repetida');
            erroMsg.style.color = 'red';
            inputSenhaRepetida.after(erroMsg);
        }
    }

    if (validado) {
        // Redireciona conforme a tela
        if (isCadastro) {
            window.location.href = 'infos'; // Para cadastro
        } else {
            window.location.href = 'index'; // Para login
        }
    }
});
