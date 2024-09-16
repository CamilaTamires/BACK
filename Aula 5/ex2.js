class PESSOA{
    // Atributos definem caracteristicas 
    constructor(nome, idade, profissao,salario){
    this.nome = nome; // Inicializa o atributo "nome"
    this.idade = idade; // Inicializa o atributo "idade"
    this.profissao = profissao; // Inicializa o atributo "profissao"
    this.salario = salario; // Inicializa o atributo "salario" 
    }


    // Métodos definem o que os objetos podem fazer
    exibetrabalho(nomeEmpresa, tempoTrabalho) {
        console.log(`Nome da empresa: ${nomeEmpresa}, trabalho á ${tempoTrabalho} anos`);
    }

}
 // Exemplo de uso
 const novaCadastro = new PESSOA('Camila', 31, 'comercial', 1500.00);
 novaCadastro.exibetrabalho('IGA',1);
