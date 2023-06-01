//Primeiros exercicios
/*
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
*/

//Desafio Fatorial
/*
let fatorial = 0;

console.log('__________________________');
for (let i = 10; i > 0; i -= 1) {
    console.log(`10! = 10 x ${i} = ${10 * i}`);
    fatorial += 10 * i;
}
console.log(`10! = ${fatorial}`);
*/

//Desafio Inverter Palavra
/*
let word = 'tryber';
let invertedWord = '';

//invertedWord = word.split('').reverse().join('');

for (let index = word.length - 1; index >= 0; index -= 1) {
    invertedWord += word[index];
    
}

console.log(invertedWord);
*/

//Desafio da pirâmide de Asteriscos
/*
let n = 5;
let asteriscos = '';

for (let vertical = 0; vertical < n; vertical += 1) {
    asteriscos += '*';
    console.log(asteriscos);
    
}
*/

//Desafio dos Asteriscos
/*
let n = 5;
let asteriscos = '';

for (let vertical = 0; vertical < n; vertical += 1) {
    asteriscos += '*';
    
}
for (let horizontal = 0; horizontal < n; horizontal += 1) {
    console.log(asteriscos);

}
*/

// Pirâmide de Asteriscos invertida
let n = 5;
let asterisco = '';
let space = [''];

for (let inverted = 0; inverted < n + 1; inverted += 1) {  
    space.push('');
    
}
for (let index = n; index > 0; index -= 1) {
    asterisco += '*';
    space.pop();
    console.log(`${space.join(' ')}${asterisco}`);
}
