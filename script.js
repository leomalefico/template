function addData() {
    // Recupera os valores do formulário
    var assuntoEmail = document.getElementById('assuntoEmail').value;
    var filtroTenable = document.getElementById('filtroTenable').value;
    var pluginId = document.getElementById('pluginId').value;
    var nomeVulnerabilidade = document.getElementById('nomeVulnerabilidade').value;
    var descricaoVulnerabilidade = document.getElementById('descricaoVulnerabilidade').value;
    var solucao = document.getElementById('solucao').value;
    var prazoCorrecao = document.getElementById('prazoCorrecao').value;
    var hostsAfetados = document.getElementById('hostsAfetados').value;
    var linkChamadoGLPI = document.getElementById('linkChamadoGLPI').value;
    var imagem = document.getElementById('imagem').files[0]; // Obtem o arquivo de imagem

    // Cria um item de lista com os dados inseridos
    var listItem = document.createElement('li');
    listItem.innerHTML =  '<br><strong>Assunto do E-mail:</strong> ' + assuntoEmail + '<br>' +
                          '<br><strong>Filtro Tenable:</strong> ' + filtroTenable + '<br>' +
                          '<br><strong>Plugin ID:</strong> ' + pluginId + '<br>' +
                          '<br><strong>Nome da Vulnerabilidade:</strong> ' + nomeVulnerabilidade + '<br>' +
                          '<br><strong>Descrição da Vulnerabilidade:</strong> ' + descricaoVulnerabilidade + '<br>' +
                          '<br><strong>Solução:</strong> ' + solucao + '<br>' +
                          '<br><strong>Prazo de correção:</strong> ' + prazoCorrecao + '<br>' +
                          '<br><strong>Hosts afetados:</strong> ' + hostsAfetados + '<br>' +
                          '<br><strong>Link do Chamado GLPI:</strong> ' + linkChamadoGLPI + '<br>'+'<br>';

    // Se uma imagem foi selecionada, adiciona ao item da lista
    if (imagem) {
        var reader = new FileReader(); // Cria um objeto FileReader
        reader.onload = function(event) {
            var imgElement = document.createElement('img'); // Cria um elemento de imagem
            imgElement.src = event.target.result; // Define o src da imagem como o resultado da leitura do arquivo
            imgElement.style.maxWidth = '80%'; // Define a largura máxima da imagem
            listItem.appendChild(imgElement); // Adiciona a imagem ao item da lista
        }
        reader.readAsDataURL(imagem); // Lê o arquivo como uma URL de dados
    }

    // Adiciona o item à lista de dados
    document.getElementById('dataList').appendChild(listItem);

    // Limpa os campos do formulário após adicionar os dados
    document.getElementById('filtroTenable').value = '';
    document.getElementById('pluginId').value = '';
    document.getElementById('nomeVulnerabilidade').value = '';
    document.getElementById('descricaoVulnerabilidade').value = '';
    document.getElementById('solucao').value = '';
    document.getElementById('prazoCorrecao').value = '';
    document.getElementById('hostsAfetados').value = '';
    document.getElementById('linkChamadoGLPI').value = '';
    document.getElementById('assuntoEmail').value = '';
    document.getElementById('imagem').value = '';
}
