const blankSpace = (name, age) => {
  if (!name || !age) {
    throw new Error('Todas as informações são necessárias');
  }
}

const checkAge = (age) => {
  if (age < 18) {
    throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
  }
}

const studentRegister = (name, age) => {
  try {
    blankSpace(name, age);
    checkAge(age);
    return 'Nome, seja bem-vindo(a) à AuTrybe!';
  } catch (error) {
    return error.message;
  }
}
console.log(studentRegister('Lis', 17));