//Função que foi usada para validar email
function validarEmail(email){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
}

//Usei para salvar o email no localstorage sem sobrescrever
function salvar(event){
    event.preventDefault()

    let arr = []
    let novoEmail = document.getElementById("email").value

    const message = document.getElementById("message")
    message.style.display = "none"

        if(!validarEmail(novoEmail)) {
            message.textContent = "Por favor, insira um email válido!"
            message.className = ""
            message.style.display = "block"
            setTimeout(() => {
                message.style.display = "none"
       }, 3000)
            return
        }

    if(localStorage.emails){
        
        arr = JSON.parse(localStorage.getItem('emails'))
    }
    
    arr.push(novoEmail)
    document.getElementById("email").value = " "
    localStorage.emails = JSON.stringify(arr)

    message.textContent = "Cadastro efetuado com sucesso!"
    message.className = "success"
    message.style.display = "block"
    setTimeout(() => {
        message.style.display = "none";
    }, 3000);
}   
