let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", (event) => {
  console.log(event.target.value);

  let pacientes = document.querySelectorAll(".paciente");
  // fazendo um loop for em cima do pacientes
  if (event.target.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      let tdNome = paciente.querySelector(".info-nome");
      let nome = tdNome.textContent;
      let expressao = new RegExp(campoFiltro.value, "i"); // expressão regular, primeiro parametro o que vc quer que busque(campoFiltro.value) segundo argumento como que quer que busque ("i") com minusculo e maisculo
      if (!expressao.test(nome)) { // pesquisando pela expressão regular
        //ou (nome != campoFiltro.value) ou if(nome != event.target.value)
        paciente.classList.add("invisivel"); // adicionar classe invisivel
      } else {
        paciente.classList.remove("invisivel"); // remover classe invisivel
      }
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      let paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});
