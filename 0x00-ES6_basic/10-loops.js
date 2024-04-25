<<<<<<< HEAD
export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    array[array.indexOf(value)] = `${appendString}${value}`;
  }

  return array;
}

=======
export default function appendToEachArrayValue(array, appendString) {
  const testArray = [];
  for (const value of array) {
    testArray.push(appendString + value);
  }

  return testArray;
}
>>>>>>> 4d6f73f853c0741afdfb5a465c68c3cb940fad05
