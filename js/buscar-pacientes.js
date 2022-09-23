let botaoAdiciona = document.querySelector("#buscar-paciente");

botaoAdiciona.addEventListener("click", () => {
    // fazendo uma requisição para um API
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // abrir conexão do tipo GET

    xhr.addEventListener("load", () => { // escutador de eventos para quando a requesição estiver carrega executar está função 
        // console.log(xhr.responseText);// responseText: o texto da resposta

        let erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200) { // status da requisição
            let resposta = xhr.responseText;// responseText: o texto da resposta
            let pacientes = JSON.parse(resposta); // transforma o json em um objeto(uma lista de objetos)
            erroAjax.classList.add("invisivel");

            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send(); // enviando a requesição...
});