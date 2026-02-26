const mensagem = document.getElementById("mensagem")
const select = document.getElementById("idioma")

function traduzir() {
    switch (select.value){
        case "portugues":
            mensagem.innerHTML = "Estou muito feliz de aprender JS"
            break
        case "ingles":
            mensagem.innerHTML = "I'm very happy to be learning JS."
            break
        case "espanhol":
            mensagem.innerHTML = "Estoy muy feliz de estar aprendiendo JS."
            break
        case "frances":
            mensagem.innerHTML = "Je suis très heureux d'apprendre JS."
            break
        case "italiano":
            mensagem.innerHTML = "Sono molto felice di imparare JS."
            break
        default:
            mensagem.innerHTML = "Nenhum idioma foi selecionado."
            
    }
}