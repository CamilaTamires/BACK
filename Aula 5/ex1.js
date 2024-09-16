class CARRO{
    // Atributos definem caracteristicas 
    constructor(marca,modelo,ano){
    this.marca = marca; // Inicializa o atributo "marca"
    this.modelo = modelo; // Inicializa o atributo "modelo"
    this.ano = ano; // Inicializa o atributo "ano" 
    this.motor = false; // Inicializa o atributo "motor" como desligado (false)
    }

   // Métodos definem o que os objetos podem fazer
    ligarMotor() {
    this.motor = true; // Liga o motor
    console.log(`O motor está ligado`);
    }

    desligarMotor() {
    this.motor = false; // Desliga o motor
    console.log(`O motor está desligado`);
    }
}
    // Exemplo de uso
    const meuCarro = new CARRO('Fiat', 'Palio', 2010);
    meuCarro.ligarMotor(); 
    meuCarro.desligarMotor(); 
