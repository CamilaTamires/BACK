class Maquinas {
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
      this.nome = nome;
      this.quantidadeEixos = quantidadeEixos;
      this.rotacoesPorMinuto = rotacoesPorMinuto;
      this.consumoEnergia = consumoEnergia;
      this.ligada = false; //máquina está desligada
    }
  
    // Método ligar a máquina
    ligar() {
      this.ligada = true;
      console.log(`${this.nome} está ligada.`);
    }
  
    // Método desligar a máquina
    desligar() {
      this.ligada = false;
      console.log(`${this.nome} está desligada.`);
    }
  
    // Método ajustar a velocidade de rotação
    ajustarVelocidade(rotacoes) {
      if (this.ligada) {
        this.rotacoesPorMinuto = rotacoes;
        console.log(`Velocidade ajustada para ${rotacoes} RPM.`);
      } else {
        console.log('A máquina precisa estar ligada para ajustar a velocidade.');
      }
    }
  }
  
  // Definindo a classe Furadeira que herda de Máquinas
  class Furadeira extends Maquinas {
    constructor(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia) {
      super(nome, quantidadeEixos, rotacoesPorMinuto, consumoEnergia);
    }
  }
  
 
  const minhaFuradeira = new Furadeira('Furadeira Turbo', 3, 1500, 1200);
  
  // Teste ligar a máquina
  minhaFuradeira.ligar(); // "Furadeira Turbo está ligada."
  
  // Teste a velocidade de rotação
  minhaFuradeira.ajustarVelocidade(2000);
    
  // Teste desligar a máquina
  minhaFuradeira.desligar(); // "Furadeira Turbo está desligada."
  
  // Tentativa ajustar a velocidade enquanto a máquina está desligada
  minhaFuradeira.ajustarVelocidade(2500); // "A máquina precisa estar ligada para ajustar a velocidade."
  