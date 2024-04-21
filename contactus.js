
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

function salvarContactUs(){
    let firstName = document.getElementById("fname").value;
    
}
