const checkNumber = (number1, number2) => {
  if (number1 === number2) {
    return 'Parabéns, você ganhou';
  }
  return 'Tente novamente';
};

const sortNumber = (betNumber, hof) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return hof(randomNumber, betNumber);
};

console.log(sortNumber(2, checkNumber));