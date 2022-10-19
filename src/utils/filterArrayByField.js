const filterArrayByField = (array, field, value) => {
  return array.filter((item) => item[field] === value);
};

export default filterArrayByField;
