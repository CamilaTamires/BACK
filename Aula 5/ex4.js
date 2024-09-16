class Cliente {
    constructor(nome, profissao, saldo) {
      this.nome = nome;
      this.profissao = profissao;
      this.saldo = saldo;
    }
  
    // Método para realizar um Pix 
    pix(valor) {
      if (valor <= 0) {
        console.log('O valor do Pix deve ser positivo.');
        return;
      }
      if (valor > this.saldo) {
        console.log('Saldo insuficiente para realizar o Pix.');
        return;
      }
      this.saldo -= valor;
      console.log(`Pix de R$${valor.toFixed(2)} realizado com sucesso.`);
    }
  
    // Método para solicitar um empréstimo
    emprestimo(valor) {
      if (valor <= 0) {
        console.log('O valor do empréstimo deve ser positivo.');
        return;
      }
      this.saldo += valor;
      console.log(`Empréstimo de R$${valor.toFixed(2)} concedido com sucesso.`);
    }
  
    // Método para realizar um saque
    saque(valor) {
      if (valor <= 0) {
        console.log('O valor do saque deve ser positivo.');
        return;
      }
      if (valor > this.saldo) {
        console.log('Saldo insuficiente para realizar o saque.');
        return;
      }
      this.saldo -= valor;
      console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
    }
  
    // Método para mostrar o extrato
    extrato() {
      console.log(`Extrato - Nome: ${this.nome}, Profissao: ${this.profissao}, Saldo: R$${this.saldo.toFixed(2)}`);
    }
  }
  
  // Função para interagir com o usuário
  function main() {
    const nome = prompt('Digite seu nome:');
    const profissao = prompt('Digite sua profissao:');
    let saldo = parseFloat(prompt('Digite seu saldo inicial:'));
  
    const cliente = new Cliente(nome, profissao, saldo);
  
    while (true) {
      const opcao = prompt('Escolha uma opção:\n1. Pix\n2. Empréstimo\n3. Saque\n4. Extrato\n5. Sair');
  
      switch (opcao) {
        case '1':
          const valorPix = parseFloat(prompt('Digite o valor do Pix:'));
          cliente.pix(valorPix);
          break;
        case '2':
          const valorEmprestimo = parseFloat(prompt('Digite o valor do empréstimo:'));
          cliente.emprestimo(valorEmprestimo);
          break;
        case '3':
          const valorSaque = parseFloat(prompt('Digite o valor do saque:'));
          cliente.saque(valorSaque);
          break;
        case '4':
          cliente.extrato();
          break;
        case '5':
          console.log('Saindo...');
          return;
        default:
          console.log('Opção inválida. Tente novamente.');
      }
    }
  }
  

  main();
  