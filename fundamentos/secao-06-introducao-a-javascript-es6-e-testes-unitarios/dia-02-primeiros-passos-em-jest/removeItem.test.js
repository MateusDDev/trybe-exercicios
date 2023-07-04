const functions = require('./removeItem');

describe('Função removeItem', () => {
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array [1, 2, 4].', () => {
    const tentativa = functions.removeItem([1, 2, 3, 4], 3);
    const esperado = [1, 2, 4];
    expect(tentativa).toEqual(esperado);
  })
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4].', () => {
    const tentativa = functions.removeItem([1, 2, 3, 4], 3);
    const esperado = [1, 2, 3, 4];
    expect(tentativa).not.toEqual(esperado);
  })
  test('Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array [1, 2, 3, 4].', () => {
    const tentativa = functions.removeItem([1, 2, 3, 4], 5);
    const esperado = [1, 2, 3, 4];
    expect(tentativa).toEqual(esperado);
  })
})