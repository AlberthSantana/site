const preco = document.getElementById("preco")
const desconto = document.getElementById("desconto")
const resultado = document.getElementById("resultado")

preco.focus()

function calcular() {
    let _preco = parseFloat(preco.value)
    let _desconto = parseFloat(desconto.value)

    if( !(_preco) ){
        return alert("Preço tem que ser maior que 0")
    }

    if (_preco <= 0 || _desconto < 0) {
        return alert('Desconto ou Preço tem que ser maior 0')
    }

    if( !(_desconto)) {
        desconto.value = 0
        _desconto = 0
    }

    let _resultado = (_preco * _desconto) / 100
    let total = _preco - _resultado

    resultado.innerHTML = `
    Valor do produto: ${_preco.toFixed(2)} R$  <br>
    Desconto De: ${_desconto}% <br>
    Valor Desconto: ${_resultado.toFixed(2)} <br>
    Valor Final: ${total.toFixed(2)} R$
    `
}

function limpar() {
    preco.value = ""
    desconto.value = ""
    resultado.innerHTML = ""
    preco.focus()
}

