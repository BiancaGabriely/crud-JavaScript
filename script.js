let usuarios = [];

function cadastrar(){
    let nome = document.getElementById("nome").value;
    let cpf = Number(document.getElementById("cpf").value);

    let usuario = {
        cpf: cpf,
        nome: nome
    };

    let existe = usuarios.some(u => u.cpf === cpf);

    if(existe){
        alert("ERRO: Este CPF já está cadastrado.");
        return;
    }

    usuarios.push(usuario);
    alert("Usuário Cadastrado com Sucesso!");

    console.log(usuarios);

    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";

    // Coloca o cursor de volta no campo Nome para o próximo cadastro
    document.getElementById("nome").focus();

};

function listar(){
    let lista = document.getElementById("lista");
    let tabela = document.getElementById("tusuarios");

    lista.innerHTML = "";

    usuarios.forEach(usuario => {
        lista.innerHTML += `
        <tr>
            <td>${usuario.cpf}</td>
            <td>${usuario.nome}</td>
        </tr>
        `;
    });

    tabela.style.display = "table";
};

function editar(campo){
    let cpfBusca = Number(prompt(`Digite o CPF para busca:`));

    let usuario = usuarios.find(u => u.cpf === cpfBusca);

    let novoValor = prompt(`Digite o novo ${campo}`);

    usuario[campo] = novoValor;

};

function deletar(){
    let cpf_del = Number(prompt(`Informe o CPF que deseja deletar:`));

    let indice = usuarios.findIndex(u => u.cpf === cpf_del);

    if(indice !== -1 ){
        usuarios.splice(indice, 1);

        alert("Usuário Removido!");
    }else{
        alert("Usuário não encontrado!")
    }
};