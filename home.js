
let arr = []

function validarEmail(email){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(email)
}

function salvar(){
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
