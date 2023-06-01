const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;
let maiorNumero = 0;
let numerosImpares = [];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
    soma += numbers[i];
    
}
console.log('__________________________');
console.log('Soma');
console.log(soma);

media = soma / numbers.length;
console.log('__________________________');
console.log('Média Aritimética');
console.log(media);

if(media > 20) {
    console.log('O valor da média aritmética é maior que 20');

}else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
    }
    if (numbers[i] % 2 !== 0) {
        numerosImpares.push(numbers[i]);
    }
}
console.log('__________________________');
console.log(maiorNumero);

console.log('__________________________');
console.log(numerosImpares);