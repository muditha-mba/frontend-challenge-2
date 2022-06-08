//This function deletes properties from object where values are false and return objects which has a length > 0
export const findEdidedFields = (values) => {
  //copying object
  let valuesCopy = Object.assign({}, values);

  for (let propName in valuesCopy) {
    if (valuesCopy[propName] === false) {
      delete valuesCopy[propName];
    }
  }

  //finding object length
  const objSize = Object.keys(valuesCopy).length;
  if (objSize === 0) {
    return 0;
  } else {
    return Object.keys(valuesCopy);
  }
};
