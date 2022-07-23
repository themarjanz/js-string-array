const numbers = [6, 4, 7, 1, 3, 9, 2, 8, 5];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ['kabil', 'josim', 'razzak', 'anwar', 'depjol', 'badsha'];
// const sortedFriend = friends.sort();
// console.log(sortedFriend);
const reversedFriend = friends.reverse();
// console.log(reversedFriend);

// number sorting fun
const bigNumbers = [66, 58, 81, 92, 9, 6, 37, 13, 2];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);