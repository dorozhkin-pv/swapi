const findIndexById = (id, arr) => {
  return arr.findIndex(s => s.id === id);
}

const inArray = (id, arr) => {
  let index = findIndexById(id, arr);
  return index !== -1;
}

const inString = (str, searchValue) => {
  let index = str.indexOf(searchValue);
  return index !== -1;
}

export { findIndexById, inArray, inString }