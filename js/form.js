let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => { // addEventListener: escuta o evento de click no botão ou form, neste caso no form
    event.preventDefault(); // tira o comportamento padrão do botao dentro do form de recarregar a pagina, pegar o event como parametro para funcionar corretamente, fora do paramentro o event aparece como depreciado

    let form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    let paciente = obtemPacienteDoFormulario(form);

    //validações

    let erros = validaPAciente(paciente);
    console.log(erros);

    if(erros.length > 0) {
        exibeMenssagemErros(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    //limpando o formulario com o reset
    form.reset();
    
    // limpando o ul de erro na tela
    let menssagemErro = document.querySelector("#menssagens-erro");
    menssagemErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); // appendChild: inserindo a tag pacienteTr criado, dentro da tag tabela

}

function exibeMenssagemErros(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // zerar os li para não acumular na tela
    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    let paciente = { // objeto em javascript, chave e valor
        nome: form.nome.value, // pegando valor do input com o value e deixando dentro da variavel
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),// passando paramentro para a função  
    }

    return paciente;
}

function montaTr(paciente) {

    let pacienteTr = document.createElement("tr"); // criando os elementos tr
    pacienteTr.classList.add("paciente");

    // modo de ser feito sem refatorar
    // let nomeTd = document.createComment("td");
    // nomeTd.classList.add("info-nome");
    // nomeTd.textContent = paciente.nome;

    // modo de ser feito refatorado
    let nomeTd = montaTd(paciente.nome, "info-nome");
    let pesoTd = montaTd(paciente.peso, "info-peso");
    let alturaTd = montaTd(paciente.altura, "info-altura");
    let gorduraTd = montaTd(paciente.gordura, "info-gordura");
    let imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd); // appendChild: inserindo a tag nomeTd criado, dentro da tag pacienteTr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td"); // createElement: criando o elemento html via js
    td.textContent = dado; // inserindo o parametro inserido pelo usuario dentro da tag td criada
    td.classList.add(classe); // adicionando a classe no html via js

    return td;
}

function validaPAciente(paciente) {

    let erros = [];

    if(paciente.nome.length === 0) {
        erros.push("O nome não pode ser em branco");
    }

    if(paciente.altura.length === 0) {
        erros.push("A altura não pode ser em branco");
    }

    if(paciente.peso.length === 0) {
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.gordura.length === 0) {
        erros.push("A gordurado não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    } 

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}