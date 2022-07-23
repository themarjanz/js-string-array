const anthem = 'Amar sonar bangla ami tumay valobasghi';
const words = anthem.split(' ');
const withoutA = anthem.split('a');
// console.log(withoutA);

// slice
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

//sub str
const anotherPart = anthem.substr(11, 8);
// console.log(anotherPart);

// substring
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);
//concat
const first = 'Amader';
const second = 'City';
// const fullString = first + second;
const fullString = first.concat(second).concat('abc').concat('RJ kibria');
// console.log(fullString);

//join word

const wods = ['alim', 'badon', 'canim', 'david'];
// const allJoined = wods.join('');
// const allJoined = wods.join(' ');
const allJoined = wods.join(',');
console.log(allJoined);