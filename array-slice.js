const number = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
//slice
const numberSliced = number.slice(4, 8);
// console.log(numberSliced);
// console.log(number);
//remove element from array
const numberSpliced = number.splice(4, 2);
// console.log(numberSpliced);
// console.log(number);

const numberSpliced2 = number.splice(4, 0, 99, 111, 888, 777);
console.log(numberSpliced2);
console.log(number);