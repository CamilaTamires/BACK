function MaiorNumero(num1, num2, num3) {
    let maior;

    // Comparando os números para encontrar o maior
    if (num1 >= num2 && num1 >= num3) {
        maior = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maior = num2;
    } else {
        maior = num3;
    }

    return maior;
}


let Num_maior = MaiorNumero(10, 25, 15);


console.log(`O maior número é: ${Num_maior}`);
