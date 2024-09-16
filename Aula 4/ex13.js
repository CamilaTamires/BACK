function teste(str) {
    var strReversa = str.split('').reverse().join('');
    return str === strReversa;
}


var resultado = teste("arara"); 

console.log(resultado);
