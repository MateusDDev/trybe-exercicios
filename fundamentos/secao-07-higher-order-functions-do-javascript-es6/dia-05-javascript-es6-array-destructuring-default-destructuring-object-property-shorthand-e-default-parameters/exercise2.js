const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ( [car, brand, year] ) => {
  const obj = {car, brand, year}
  return obj;
};

console.log(toObject(palio));
