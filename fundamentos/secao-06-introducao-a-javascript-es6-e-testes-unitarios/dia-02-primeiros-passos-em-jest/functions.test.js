const { functionTypeAnnotation } = require('@babel/types');
const functions = require('./functions');

describe('Função removeItem', () => {
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array [1, 2, 4].', () => {
    const test = functions.removeItem([1, 2, 3, 4], 3);
    const expected = [1, 2, 4];
    expect(test).toEqual(expected);
  })
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    const test = functions.removeItem([1, 2, 3, 4], 3);
    const expected = [1, 2, 3, 4];
    expect(test).not.toEqual(expected);
  })
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4].', () => {
    const test = functions.removeItem([1, 2, 3, 4], 5);
    const expected = [1, 2, 3, 4];
    expect(test).toEqual(expected);
  })
})

describe('Função myFizzBuzz', () => {
  test('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    const test = functions.myFizzBuzz(15);
    const expected = 'fizzbuzz';
    expect(test).toBe(expected);
  })
  test('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
    const test = functions.myFizzBuzz(3);
    const expected = 'fizz';
    expect(test).toBe(expected);
  })
  test('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
    const test = functions.myFizzBuzz(5);
    const expected = 'buzz';
    expect(test).toBe(expected);
  })
  test('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
    const test = functions.myFizzBuzz(2);
    const expected = 2;
    expect(test).toBe(expected);
  })
  test('Caso num não seja um número, a função retorna false', () => {
    const test = functions.myFizzBuzz('D.');
    const expected = false;
    expect(test).toBe(expected);
  })
})