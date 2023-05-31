let num1 = 18;
let num2 = 25;
let num3 = 28;
let triangulo = false;
let chessPiece = 'Torre';
let par = false;
let salario = 5000;

//Exercício 1
/*
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
*/

//Exercício 2
/*
function maiorNumero(number1, number2) {
    if(number1 > number2){
        return(console.log(`${number1} é maior do que ${number2}`));
    }else if(number2 > number1){
        return(console.log(`${number2} é maior do que ${number1}`));
    }
}
console.log(maiorNumero(num1, num2));
*/

//Exercício 3
/*
if(num1 > num2 && num1 > num3){
    console.log(`${num1} é o maior número`);
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} é o maior número`);
}else if(num3 > num1 && num3 > num2){
    console.log(`${num3} é o maior número`);
}
*/

//Exercício 4
/*
if(num1 + num2 + num3 === 180){
    triangulo = true;
    console.log('É um triângulo');
}else if(num1 + num2 + num3 < 0){
    console.log('Ângulo inválido');
}else {
    triangulo = false;
    console.log('Não é um triângulo');
}
*/

//Exercício 5
/*
switch (chessPiece.toLowerCase()) {
    case 'peao':
        console.log('Anda casa para frente, duas casas na primeira jogada');
        break;
    case 'bispo':
        console.log('Anda em diagonal');
        break;
    case 'cavalo':
        console.log('Anda em L');
        break;
    case 'torre':
        console.log('Anda em direções retas');
        break;
    case 'rainha':
        console.log('Anda em todas as direções menos em L');
        break;
    case 'rei':
        console.log('Anda apenas uma casa ao seu redor');
    default:
        console.log('Peça não existe');
        break;
}
*/

//Exercício 6
/*
if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    par = true;
    console.log('Um dos números é par');
}else {
    par = false;
    console.log('Nenhum número é par');
}
*/

//Exercício 7
console.log(salario);
if(salario <= 1556.94){
    salario -= ((salario * 8) / 100);
}else if(salario > 1556.94 && salario <= 2594.92){
    salario -= ((salario * 9) / 100);
}else if(salario > 2594.92 && salario <= 5189.82){
    salario -= ((salario * 11) / 100);
}else if(salario > 5189.82) {
    salario -= 570.88;
}
console.log(salario);

if(salario <= 1903.98){
    salario = salario;
}else if(salario > 1903.98 && salario <= 2826.65){
    salario -= ((salario * 7.5) / 100) - 142.80;
}else if(salario > 2826.65 && salario <= 3751.05){
    salario -= ((salario * 15) / 100) - 354.80;
}else if(salario > 3751.05 && salario <= 4664.68){
    salario -= ((salario * 22.5) / 100) - 636.13;
}else if(salario > 4664.68){
    salario -= ((salario * 27.5) / 100) - 869.36;
}else{
    console.log('Insento de IR');
}

console.log(salario);