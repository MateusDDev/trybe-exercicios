let num1 = 18;
let num2 = 25;
let num3 = 32;

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
        console.log(`${number1} é maior do que ${number2}`);
    }else if(number2 > number1){
        console.log(`${number2} é maior do que ${number1}`);
    }
}

console.log(maiorNumero(num1, num2));
*/

//Exercício 3
if(num1 > num2 && num1 > num3){
    console.log(`${num1} é o maior número`);
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} é o maior número`);
}else if(num3 > num1 && num3 > num2){
    console.log(`${num3} é o maior número`);
}