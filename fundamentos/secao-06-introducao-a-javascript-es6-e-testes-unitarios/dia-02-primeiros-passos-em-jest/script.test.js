const { functionTypeAnnotation } = require('@babel/types');
const {encode, decode} = require('./script.js');

describe('Funções encode e decode', () => {
  test('São funções', () => {
    expect(typeof encode && typeof decode).toBe('function');
  })
  test('A string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('Liz').length).toBe(3);
    expect(decode('L3z').length).toBe(3);
  })
})
describe('Função encode', () => {
  test('Se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
    const test = encode('aeiou');
    const expected = '12345';
    expect(test).toBe(expected);
  })
  test('Se as demais letras não são convertidas', () => {
    expect(encode('Bcdfghjk')).toBe('Bcdfghjk');
  })
})
describe('Função decode', () => {
  test('Se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    const test = decode('12345');
    const expected = 'aeiou';
    expect(test).toBe(expected);
  })
  test('Se as demais letras não são convertidas', () => {
    expect(decode('Bcdfghjk')).toBe('Bcdfghjk');
  })
})