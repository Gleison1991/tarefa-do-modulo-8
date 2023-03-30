const inputNomeDeContato = document.getElementById('nome-de-contat0');
const inputTelefoneDeContato = document.getElementById('telefone-de-contato');

let linhas = '<tr>';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha(){
    const inputNomeDeContato = document.getElementById('nome-de-contato');
    const inputTelefoneDeContato = document.getElementById('telefone-de-contato');

    nomeDeContato.push(inputNomeDeContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeDeContato.value}</td>`;
    linha += `<td>${inputTelefoneDeContato.value}</td>`;
    linha += `<td>${inputTelefoneDeContato.value} <td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputNomeDeContato.value = '';
    inputTelefoneDeContato.value = '';

    function deleteRow(i) {
        document.getElementById('tabela').deleteRow(i)
    }

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]; 
    }

    return somaDasNotas / notas.length;

