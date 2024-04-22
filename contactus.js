//Função que foi usada para validar email
function validarEmail(emailPage2){
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return regex.test(emailPage2)
}


//Usei para salvar o email no localstorage sem sobrescrever
function salvar(){

    let arr = []
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

//Função que criei para validar nome e sobrenome
function validarNome(nome) {
    
    var regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-']+$/;
    return regex.test(nome);
}


function salvarContactUs(fname, lname, emailForm, message){

    //validações que usei no form
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

    //Usei para salvar as informações no localstorage sem sobrescrever

    let info = {nome: fname, sobrenome: lname, emailForm: emailForm, message: message}

    let objeto = []

    if(localStorage.infos){
        
        objeto = JSON.parse(localStorage.getItem('infos'))
    }
    
    objeto.push(info)

    localStorage.infos = JSON.stringify(objeto)

   
    document.getElementById("fname").value = " "
    document.getElementById("lname").value = " "
    document.getElementById("emailForm").value = " "
    document.getElementById("message").value = " "

  

    alert("Cadastro concluído com sucesso!")
}
