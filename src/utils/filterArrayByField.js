const filterArrayByField = (array, field, value) => {
  for (let i = 0; i < array?.length; i++) {
    if (array[i]?.[field] === value) {
      return array[i]?.cards;
    }
  }
  // return array.filter((item) => item[field] === value);
};

export default filterArrayByField;
