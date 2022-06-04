// parametros de funçao


function nomeIdade(nome, idade){
    return`meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Brendon", 27))


function soma(numero1, numero2){
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}


console.log(soma(100, 100))
console.log(soma(-100, 50))

console.log(multiplica(soma(2, 2), soma(1, 1)));
console.log(multiplica(2, 3))