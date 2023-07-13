const fullEmail = (name) => {
  const splitedName = name.split(' ');
  const finalName = splitedName.join('_');
  return `${finalName}@trybe.com`.toLocaleLowerCase();
};

const newEmployees = () => {
  const employees = {
    id1: fullEmail('Pedro Guerra'),
    id2: fullEmail('Luiza Drumond'),
    id3: fullEmail('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees());