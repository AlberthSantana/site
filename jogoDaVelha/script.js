const celulas = document.querySelectorAll(".celula")
const btnReiniciar = document.querySelector(".reiniciar")

let vezX = true

const combinacoesVitoria = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

btnReiniciar.addEventListener("click", start)

function start () {
    celulas.forEach(celula => {
        celula.textContent = ""
        celula.addEventListener("click", jogada, {once:true})
    })
}

function jogada (event) {
    const jogador = vezX ? "X" : "O"
    event.target.textContent = jogador
    if (checarVitoria(jogador)) {
        alert("Ganhador: " + jogador)
        return
    }

    if (checarEmpate()) {
        alert("Empate")
        return
    }

    vezX = !vezX
}

function checarVitoria (jogador){
    return combinacoesVitoria.some(combinacao => {
        return combinacao.every(index => {
            return celulas[index].textContent === jogador  
        })
    })
}

function checarEmpate() {
    return [...celulas].every(celula => celula.textContent !== "")
}

start()