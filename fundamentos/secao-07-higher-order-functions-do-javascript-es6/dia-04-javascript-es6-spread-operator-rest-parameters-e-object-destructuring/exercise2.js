const sum = (...valores) => {
  return valores.reduce((acc, valor) => acc + valor, 0)
};
console.log(sum(4, 5, 6));