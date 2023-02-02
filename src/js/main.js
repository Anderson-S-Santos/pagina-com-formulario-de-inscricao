const formulario = document.querySelector('#formulario')
const inputPrimeiroNome = document.querySelector('#inputPrimeiroNome')
const inputUltimoNome = document.querySelector('#inputUltimoNome')
const inputEmail = document.querySelector('#inputEmail')
const inputSenha = document.querySelector('#inputSenha')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    //Verifica se o campo Primeiro Nome está preenchido
    if (inputPrimeiroNome.value === '') {
        alert('Preencha o campo Primeiro Nome')
        return
    }

    //Verifica se o campo Ultimo Nome está preenchido
    if (inputUltimoNome.value === '') {
        alert('Preencha o campo Ultimo Nome')
        return
    }

    //Verifica se o campo email está preenchido e se é válido
    if (inputEmail.value === '' || !emailValido(inputEmail.value)) {
        alert('O campo Email não está preenchido ou não é um email válido!')
        return
    }

    //Verifica se o campo senha está preenchido e se é válido
    if (!validaSenha(inputSenha.value, 8)) {
        alert('Senha válida! A senha deve ter no mínimo 8 dígitos.')
        return
    }

    //Se todos os campos estiverem corretamente preenchidos, envie o formulario
    formulario.submit()
});

//Função que valida o email
function emailValido(email) {

    //cria uma regex para validar o email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) {
        //Email válido
        return true
    }
    //Email inválido
    return false
}

//Função valida senha
function validaSenha(senha, minDigitos) {
    if (senha.length >= minDigitos) {
        //Senha válida
        return true
    }
    //Senha inválida
    return false
}