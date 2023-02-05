const formulario = document.querySelector('#formulario')
const inputPrimeiroNome = document.querySelector('#inputPrimeiroNome')
const inputUltimoNome = document.querySelector('#inputUltimoNome')
const inputEmail = document.querySelector('#inputEmail')
const inputSenha = document.querySelector('#inputSenha')

const campos = document.querySelectorAll('.required')
const spans = document.querySelectorAll('.spanRequired')
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
const msgSucesso = document.querySelector('.msgSucesso')

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    validaPrimeiroNome();
    validaUltimoNome();
    validaEmail();
    validaSenha();

   
        // if (msg !== true) {
        //     formulario.style.display = 'none'; 
        //     msg()
        // } 
    msg()

    // formulario.submit()
});

//Chama a mensagem de Sucesso
function msg(message) {
    if (campos[0].value.length >= 3 && campos[1].value.length >=3 && emailRegex !== true &&campos[3].value.length >= 8) {
        console.log('mensagem')
        msgSucesso.style.display = 'block'
        formulario.style.display = 'none';
}else {
    return
}
}

//Exibi uma borda vermelha e um texto caso o campo esteja inválido
function exibirErro(index) {
    campos[index].style.border = '2px solid #E63636';
    spans[index].style.display = 'block'
}

//Remove o texto de erro e adciona uma borda verde de validado
function removerErro(index) {
    campos[index].style.border = '2px solid var(--verde)';
    spans[index].style.display = 'none'
}

//Valida o campo Primeiro Nome
function validaPrimeiroNome() {
    if (campos[0].value.length < 3) {
        exibirErro(0)
    } else {
        removerErro(0)
    }
}

//Valida o campo Ultimo Nome
function validaUltimoNome() {
    if (campos[1].value.length < 3) {
        exibirErro(1)
    } else {
        removerErro(1)
    }
}

//Cria uma regex para validar o email
function validaEmail() {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (!emailRegex.test(campos[2].value)) {
        //Email válido
        exibirErro(2)
    } else {
        //Email inválido
        removerErro(2)
    }
}

//Valida a senha
function validaSenha() {
    if (campos[3].value.length < 8) {
        exibirErro(3)
    } else {
        removerErro(3)
    }
}


