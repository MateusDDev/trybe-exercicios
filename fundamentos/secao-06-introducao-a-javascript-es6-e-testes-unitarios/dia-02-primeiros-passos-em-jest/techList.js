const techList = (array, name) => {
  try {
    const newArray = array.sort();
    const technologies = [];

    for (let index = 0; index < newArray.length; index += 1) {
      technologies.push({
        tech: newArray[index],
        name,
      });
    }
    if (technologies.length === 0) {
      throw new Error('Vazio!');
    }
    return technologies;
  } catch (error) {
    return error.message;
  }
}

module.exports = techList;