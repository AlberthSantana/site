
function validar() {

    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const senha = document.getElementById("senha").value

    const emailDefault = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailDefault.test(email)) {
        alert("Insira um email válido")
    }




    const telefoneDefault = /^(?:(?:\+|00)?55)?(?:\(?([1-9][0-9])\)?)\s?(?:(?:9\d|[2-9])\d{3})\-?(\d{4})$/;

    if (!telefoneDefault.test(telefone)) {
        alert("Insira um telefone válido")
        return false
    }



    const senhaDefault = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
    if(!senhaDefault.test(senha)) {
        alert("A senha deve possuir letra maiúscula,minúscula,caracteres especiais e ao menos 8 caracteres")

        return false
    }


    return true
}



document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()

    if(validar()){
        alert("Formulário válidado com sucesso")
    }
    
})