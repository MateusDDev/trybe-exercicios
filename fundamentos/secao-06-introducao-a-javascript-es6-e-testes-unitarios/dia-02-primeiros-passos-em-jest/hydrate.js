const { log } = require("console");

const hydrate = (string) => {
  const newString = string.split('');
  let waterDrinks = 0;
  for (let index = 0; index < newString.length; index += 1) {
    const drinks = parseInt(newString[index]);
    if (drinks) {
      waterDrinks += drinks;
    }
  }

  if (waterDrinks > 1) {
    return `${waterDrinks} copos de água`;
  }

  return `${waterDrinks} copo de água`;
}

module.exports = hydrate;