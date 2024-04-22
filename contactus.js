
let arr = []

function validarEmail(emailPage2){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(emailPage2)
}

function salvar(){
    let novoEmail = document.getElementById("emailPage2").value

        if(!validarEmail(novoEmail)) {
            alert("Por favor, insira um e-mail válido!")
            return
        }

    if(localStorage.emails){
        
        arr = JSON.parse(localStorage.getItem('emails'))
    }
    
    arr.push(novoEmail)
    document.getElementById("emailPage2").value = " "
    localStorage.emails = JSON.stringify(arr)

    alert("Email cadastrado com sucesso!")
}   

function validarNome(nome) {
    
    var regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-']+$/;
    return regex.test(nome);
}


function salvarContactUs(fname, lname, emailForm, message){

    if(!validarNome(fname)&& fname ==""){
        alert("Insira um nome válido")
        return
    }

    if(!validarNome(lname) && lname==""){
        alert("Insira um sobrenome válido")
        return
    }

    if(message == ""){
        alert("Escreva uma mensagem!")
        return
    }

    if(!validarEmail(emailForm)) {
        alert("Por favor, insira um e-mail válido!")
        return
    }

    let info = JSON.stringify({nome: fname, sobrenome: lname, emailForm: emailForm, message: message})

    localStorage.setItem('info', info)

    alert("Cadastro concluído com sucesso!")
}
