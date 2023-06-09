const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

const keyArray = (array, posicao) => {Object.values(array, posicao)};

const somaDeEstudantes = (array) => {
    let soma = 0;

    for (let index = 0; index < array.length; index += 1) {
        soma += array[index].students;
    }

    return soma;
};

const keyExist = (array, key) => {
  let currentKey;

  for (let index = 0; index < array.length; index += 1) {
      for (let indexx = 0; indexx < Object.keys(array[index]).length; indexx += 1) {
        currentKey = Object.keys(array[index]);
        if (currentKey.includes(key)) {
          return true;
        } 
      }
  }

  if (!currentKey.includes(key)) {
    return false;
  }
};
keyExist(school.lessons, 'professor');

const mudarTurno = (objeto, course, value) => {
  for (let index = 0; index < objeto.lessons.length; index += 1) {
    if (objeto.lessons[index]['course'] === course) {
      objeto.lessons[index].shift = value;
    }
  }
};
mudarTurno(school, 'Python', 'Noite');
console.log(school.lessons);