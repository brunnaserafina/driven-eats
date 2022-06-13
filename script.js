let prato;
let bebida;
let sobremesa;

let nomePrato;
let precoPrato;
let nomeBebida;
let precoBebida;
let nomeSobremesa;
let precoSobremesa;


function selecionarPrato(pratoSelecionado) {
    prato = document.querySelector(".pratos .selecionado");
    if (prato !== null) {
        prato.classList.remove("selecionado");
    }
    pratoSelecionado.classList.add("selecionado");
    nomePrato = document.querySelector(".pratos .opcoes .selecionado h4").innerHTML;
    precoPrato = document.querySelector(".pratos .opcoes .selecionado p").innerHTML.replace("R$", "").replace(",", ".");

    const aguardandoPedido = document.querySelector(".aguardando-pedido");
    const pedidoConcluido = document.querySelector(".pedido-concluido");
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        aguardandoPedido.classList.add("escondido");
        pedidoConcluido.classList.remove("escondido");
    }
}

function selecionarBebida(bebidaSelecionada) {
    bebida = document.querySelector(".bebidas .selecionado");
    if (bebida !== null) {
        bebida.classList.remove("selecionado");
    }
    bebidaSelecionada.classList.add("selecionado");
    nomeBebida = document.querySelector(".bebidas .opcoes .selecionado h4").innerHTML;
    precoBebida = document.querySelector(".bebidas .opcoes .selecionado p").innerHTML.replace("R$", "").replace(",", ".");

    const aguardandoPedido = document.querySelector(".aguardando-pedido");
    const pedidoConcluido = document.querySelector(".pedido-concluido");
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        aguardandoPedido.classList.add("escondido");
        pedidoConcluido.classList.remove("escondido");
    }
}

function selecionarSobremesa(sobremesaSelecionada) {
    sobremesa = document.querySelector(".sobremesas .selecionado");
    if (sobremesa !== null) {
        sobremesa.classList.remove("selecionado");
    }
    sobremesaSelecionada.classList.add("selecionado");
    nomeSobremesa = document.querySelector(".sobremesas .selecionado h4").innerHTML;
    precoSobremesa = document.querySelector(".sobremesas .selecionado p").innerHTML.replace("R$", "").replace(",", ".");

    const aguardandoPedido = document.querySelector(".aguardando-pedido");
    const pedidoConcluido = document.querySelector(".pedido-concluido");
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        aguardandoPedido.classList.add("escondido");
        pedidoConcluido.classList.remove("escondido");
    }
}

function pedidoFechado() {
    const mensagem = ` Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${(Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2)}`

    window.open(`https://wa.me/5548996059421?text=${encodeURIComponent(mensagem)}`)

}





