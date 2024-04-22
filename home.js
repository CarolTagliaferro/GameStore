//Função que foi usada para validar email
function validarEmail(email){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
}

//Usei para salvar o email no localstorage sem sobrescrever
function salvar(){
    let arr = []
    let novoEmail = document.getElementById("email").value

        if(!validarEmail(novoEmail)) {
            alert("Por favor, insira um e-mail válido!")
            return
        }

    if(localStorage.emails){
        
        arr = JSON.parse(localStorage.getItem('emails'))
    }
    
    arr.push(novoEmail)
    document.getElementById("email").value = " "
    localStorage.emails = JSON.stringify(arr)

    alert("Email cadastrado com sucesso!")
}   
