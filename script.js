let prato;
let bebida;
let sobremesa;

function selecionarPrato(elemento) {
    prato = document.querySelector(".pratos .selecionado");
    if (prato !== null) {
        prato.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    const aguardandoPedido = document.querySelector(".aguardando-pedido");
    const pedidoConcluido = document.querySelector(".pedido-concluido");
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        aguardandoPedido.classList.add("escondido");
        pedidoConcluido.classList.remove("escondido");
    }
}


function selecionarBebida(elemento) {
    bebida = document.querySelector(".bebidas .selecionado");
    if (bebida !== null) {
        bebida.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    const aguardandoPedido = document.querySelector(".aguardando-pedido");
    const pedidoConcluido = document.querySelector(".pedido-concluido");
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        aguardandoPedido.classList.add("escondido");
        pedidoConcluido.classList.remove("escondido");
    }
}

function selecionarSobremesa(elemento) {
    sobremesa = document.querySelector(".sobremesas .selecionado");
    if (sobremesa !== null) {
        sobremesa.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");

    const aguardandoPedido = document.querySelector(".aguardando-pedido");
    const pedidoConcluido = document.querySelector(".pedido-concluido");
    if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
        aguardandoPedido.classList.add("escondido");
        pedidoConcluido.classList.remove("escondido");
    }
}


let nomePrato = document.querySelector(".pratos .opcoes h4").innerHTML;
let precoPrato = document.querySelector(".pratos .opcoes div p").innerHTML.replace("R$", "").replace(",", ".");

let nomeBebida = document.querySelector(".bebidas .opcoes div h4").innerHTML;
let precoBebida = document.querySelector(".bebidas .opcoes div p").innerHTML.replace("R$", "").replace(",", ".");

let nomeSobremesa = document.querySelector(".sobremesas .opcoes h4").innerHTML;
let precoSobremesa = document.querySelector(".sobremesas .opcoes p").innerHTML.replace("R$", "").replace(",", ".");

function pedidoFechado() {
    const mensagem = ` Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${(Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2)}`

    window.open(`https://wa.me/5548996059421?text=${encodeURIComponent(mensagem)}`)

}





