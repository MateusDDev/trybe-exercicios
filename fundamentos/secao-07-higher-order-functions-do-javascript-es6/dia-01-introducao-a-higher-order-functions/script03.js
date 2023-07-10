const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (array1, array2) => {
  if (array1 === array2) {
    return 1;
  }
  if (array1 === 'N.A') {
    return 0;
  }
  return -0.5;
};

const autoCheck = (solutions, answers, hof) => {
  let points = 0;
  for (let index = 0; index < solutions.length; index += 1) {
    const sum = hof(solutions[index], answers[index]);
    points += sum;
  }
  return `Resultado final: ${points} pontos`;
};

console.log(autoCheck(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));