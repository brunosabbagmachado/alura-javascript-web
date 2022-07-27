//VERSAO 1 - opção de codigo que funciona, porém nao apaga novas linhas criadas posteriormente
    //var pacientes = document.querySelectorAll(".paciente");
    //pacientes.forEach(function(paciente){
    //    paciente.addEventListener("dblclick", function(){
    //        this.remove();
    //    });
    //});

//VERSÃO 2 - opção que funciona mas é mais robusta
    //var tabela = document.querySelector("table");

    //tabela.addEventListener("dblclick", function(event){
    //     var alvoEvento = event.target;
    //     var paiDoAlvo = alvoEvento.parentNode;
    //     paiDoAlvo.classList.add("fadeOut");
    //     setTimeout(function(){
    //         paiDoAlvo.remove();
    //     }, 500);   
    //});

//VERSÃO 3
var tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});

