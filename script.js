
function calcularMedia() {
    var Participação = parseFloat(document.getElementById("Participação").value);
    var Atividades = parseFloat(document.getElementById("Atividades").value);
    var Prova = parseFloat(document.getElementById("Prova").value);
    var nome = document.getElementById("nome").value;
    var resultado = document.querySelector("#resultado");
    
    var media = (Participação + Atividades + Prova) / 3 ;
    var situacao = "";
    
    if (media >= 9.5) {
       situacao = "Aluno ouro";
    } else if (media >= 8.5) {
       situacao = "Aluno prata";
    } else if (media >= 7.5) {
       situacao = "Aluno bronze";
    } else if (media >= 5) {
       situacao = "Aprovado";
    } else { 
       situacao = "Retido";
    }
    
    resultado.innerHTML = `
    <p>Nome: ${nome}</p>
    <p>Participação: ${Participação}</p>
    <p>Atividades: ${Atividades}</p>
    <p>Prova: ${Prova}</p>
    <p>media: ${media}</p>
    <p>situacao: ${situacao}</p>
    `;
    }
    