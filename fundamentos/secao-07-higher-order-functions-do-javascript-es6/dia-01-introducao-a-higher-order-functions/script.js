const fullEmail = (name) => {
  const splitedName = name.split(' ');
  const finalName = splitedName.join('_');
  return `${finalName}@trybe.com`.toLocaleLowerCase();
};

const newEmployees = () => {
  const employees = {
    id1: fullEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: fullEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: fullEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());