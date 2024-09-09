export const searchData = (input, data, termToFind) => {
  const result = data.filter((element) => element[termToFind].toLowerCase().includes(input.toLowerCase()))
  return result;
}