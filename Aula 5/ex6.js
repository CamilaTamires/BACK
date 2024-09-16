class Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      this.nome = nome;
      this.quantidade = quantidade;
      this.preco = preco;
      this.tipoComunicacao = tipoComunicacao;
      this.consumoEnergia = consumoEnergia;
      this.ligado = false; // produto está desligado
    }
  
    // Método ligar o produto
    ligar() {
      this.ligado = true;
      console.log(`${this.nome} está ligado.`);
    }
  
    // Método desligar o produto
    desligar() {
      this.ligado = false;
      console.log(`${this.nome} está desligado.`);
    }
  }
  
  // Definindo a classe Fritadeira que herda de Produtos
  class Fritadeira extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
  
    // Método ajuste a temperatura
    ajustarTemperatura(setpoint) {
      if (this.ligado) {
        console.log(`Temperatura da fritadeira ajustada para ${setpoint}°C.`);
      } else {
        console.log('A fritadeira precisa estar ligada para ajustar a temperatura.');
      }
    }
  }
  
  
  class Televisao extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
  
    
    ajustarTemperatura(setpoint) {
      console.log('Ajuste de temperatura não aplicável para a televisão.');
    }
  }
  

  class ArCondicionado extends Produtos {
    constructor(nome, quantidade, preco, tipoComunicacao, consumoEnergia) {
      super(nome, quantidade, preco, tipoComunicacao, consumoEnergia);
    }
  
    // Método ajuste a temperatura
    ajustarTemperatura(setpoint) {
      if (this.ligado) {
        console.log(`Temperatura do ar-condicionado ajustada para ${setpoint}°C.`);
      } else {
        console.log('O ar-condicionado precisa estar ligado para ajustar a temperatura.');
      }
    }
  }
  
  
  const minhaFritadeira = new Fritadeira('Fritadeira Turbo', 1, 150.00, 'Botões', 2000);
  const minhaTelevisao = new Televisao('TV LED', 2, 1200.00, 'Controle Remoto', 150);
  const meuArCondicionado = new ArCondicionado('Ar Condicionado Split', 1, 2500.00, 'Controle Remoto', 2200);
  
  // Teste de ligar e ajustar temperatura da fritadeira
  minhaFritadeira.ligar(); //Fritadeira Turbo está ligada.
  minhaFritadeira.ajustarTemperatura(180); // "Temperatura da fritadeira ajustada para 180°C."
  
  // Teste de desligar a fritadeira e tentar ajustar a temperatura
  minhaFritadeira.desligar(); // "Fritadeira Turbo está desligada."
  minhaFritadeira.ajustarTemperatura(200); // "A fritadeira precisa estar ligada para ajustar a temperatura."
  
  // Teste de ligar e ajustar temperatura do ar-condicionado
  meuArCondicionado.ligar(); // "Ar Condicionado Split está ligado."
  meuArCondicionado.ajustarTemperatura(22); // "Temperatura do ar-condicionado ajustada para 22°C."
  
  // Teste da televisão
  minhaTelevisao.ligar(); // "TV LED está ligada."
  minhaTelevisao.ajustarTemperatura(22); // "Ajuste de temperatura não aplicável para a televisão."
  