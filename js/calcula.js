let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente"); // querySelectorAll: seleciona varios classes com o mesmo nome deixando dentro de um array

for (var i = 0; i < pacientes.length; i++) {
  // faz um for(loop) dentro do array pacientes
  let paciente = pacientes[i];

  let tdPeso = paciente.querySelector(".info-peso");
  let peso = tdPeso.textContent;

  let tdAltura = paciente.querySelector(".info-altura");
  let altura = tdAltura.textContent;

  let tdImc = paciente.querySelector(".info-imc");

  let pesoEhValido = validaPeso(peso); // validação para true ou false
  let alturaEhValido = validaAltura(altura); // validação para true ou false

  if (!pesoEhValido) {
    // !pesoEhValido: se for false entre nessa validação
    tdImc.textContent = "Peso Inválido";
    pesoEhValido = false;
    paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValido) {
    tdImc.textContent = "Altura Inválido";
    alturaEhValido = false;
    // paciente.style.backgroundColor = "lightcoral"; // mudando o background pelo js
    // paciente.style.color = "yellow";//mudando pelo js a cor do texto
    paciente.classList.add("paciente-invalido"); // adicionando uma classe no html via js(esta classe já existe no css foi apenas adicionada no html se entrar neste if)
  }

  if (alturaEhValido && pesoEhValido) {
    // alturaEhValido === true && pesoEhValido === true
    let imc = calculaImc(peso, altura); // passando os valores peso e altura para a função
    tdImc.textContent = imc;
  }
}

function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  7;
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  let imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2); // toFixed(2) determina ficar apenas 2 casas depois do ponto
}
