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

function botaoconfirmacao() {
    janelaConfirmacao = document.querySelector(".confirmacao");
    janelaConfirmacao.classList.remove("escondido");

    transparenciaBody = document.querySelector(".conteudo");
    transparenciaBody.classList.add("transparencia");

    const nomeDoPrato = document.querySelector(".nome-prato");
    nomeDoPrato.innerHTML = `${nomePrato}`;

    const nomeDaBebida = document.querySelector(".nome-bebida");
    nomeDaBebida.innerHTML = `${nomeBebida}`;

    const nomeDaSobremesa = document.querySelector(".nome-sobremesa");
    nomeDaSobremesa.innerHTML = `${nomeSobremesa}`;

    const valorDoPrato = document.querySelector(".valor-prato");
    valorDoPrato.innerHTML = `${precoPrato}`;

    const valorDaBebida = document.querySelector(".valor-bebida");
    valorDaBebida.innerHTML = `${precoBebida}`;

    const valorDaSobremesa = document.querySelector(".valor-sobremesa");
    valorDaSobremesa.innerHTML = `${precoSobremesa}`;

    const valorTotal = document.querySelector(".valor-total");
    valorTotal.innerHTML = `R$ ${(Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2)}`;


}

function cancelar() {
    janelaConfirmacao = document.querySelector(".confirmacao");
    janelaConfirmacao.classList.add("escondido");

    transparenciaBody = document.querySelector(".conteudo");
    transparenciaBody.classList.remove("transparencia");
}

function pedidoFechado() {

    const nome = prompt("Qual seu nome completo?");
    const endereco = prompt("Qual seu endereço completo?");
    const mensagem = ` Olá, gostaria de fazer o pedido:
- Prato: ${nomePrato}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}
Total: R$ ${(Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa)).toFixed(2)}

Nome: ${nome}
Endereço: ${endereco}
`;
    
    if (nome!==null && endereco!==null && nome!=="" && endereco!=="") {
        window.open(`https://wa.me/5548996059421?text=${encodeURIComponent(mensagem)}`)
    } else {
        alert("Você não digitou alguma informação!")
    }
}





