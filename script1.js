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

    function saveEntry() {
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
 
     if (!email || !password) {
         alert('Por favor, preencha todos os campos.');
         return;
     }
 
     // Cria um objeto para armazenar a entrada
     const entry = { email, password };
 
     // Salva a entrada no localStorage
     localStorage.setItem(email, JSON.stringify(entry));
 
     // Atualiza a lista de entradas
     updateEntriesList();
 }
 
 // Função para atualizar a lista de entradas
 function updateEntriesList() {
     const entriesList = document.getElementById('entriesList');
     entriesList.innerHTML = '';
 
     for (let i = 0; i < localStorage.length; i++) {
         const key = localStorage.key(i);
         const entry = JSON.parse(localStorage.getItem(key));
 
         const listItem = document.createElement('li');
         listItem.textContent = `Email: ${entry.email}, Senha: ${entry.password}`;
         const editButton = document.createElement('button');
         editButton.textContent = 'Editar';
         editButton.onclick = () => {
             document.getElementById('email').value = entry.email;
             document.getElementById('password').value = entry.password;
         };
 
         listItem.appendChild(editButton);
         entriesList.appendChild(listItem);
     }
 }
 
 // Atualiza a lista de entradas ao carregar a página
 window.onload = updateEntriesList;