let num1 = 18;
let num2 = 25;
let num3 = 32;
triangulo = false;

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
if(num1 + num2 + num3 === 180){
    triangulo = true;
    console.log('É um triângulo');
}else if(num1 + num2 + num3 < 0){
    console.log('Ângulo inválido');
}else {
    triangulo = false;
    console.log('Não é um triângulo');
}