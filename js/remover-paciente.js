// var paciente = document.querySelectorAll(".paciente");

// // os novos usuarios adicionados na tabela não são removidos
// paciente.forEach(function(paciente) {
//     // dblclick: adicionando um evento de duplo click em cada item do loop forEach
//     paciente.addEventListener("dblclick", () => {
//         paciente.remove(); // remove(): remove o que foi clicado em cima
//     });
// });

let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", (event) => {
    //Alvo do evento é pai e o filho que é identificado o click é removido
    let alvoEvento = event.target; // indentifica aonde foi o click
    let paiDoAlvo = alvoEvento.parentNode; // seleciona o pai do filho que foi clicado
    event.target.parentNode.classList.add("fadeOut"); // acrecentando a classe para fica opac
    setTimeout(()=> {
        paiDoAlvo.remove(); // remove(): remove o que foi clicado em opacity(transparente)
    }, 500); // setTimeout: esperar um tempo determinado para fazer a ação
});