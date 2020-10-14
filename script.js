// I didn't realize it deletes all your work after each one so I did a bunch then went and looked back to turn it in then redid them lol

// Sorry this is late, I was behind in school last week and the week before, but now I am catching up

// Challenge Name: Number Split
// Challenge Difficulty: Very Easy
function numberSplit(n) {
  return [Math.floor(n / 2), Math.ceil(n / 2)];
}

// Challenge Name: Number Split
// Challenge Difficulty: Very Easy
function isBetween(first, last, word) {
  if (word >= first && word <= last) {
    return true;
  } else {
    return false;
  }
}

// Challenge Name: Bitwise Operations
// Challenge Difficulty: Easy
function bitwiseAND(n1, n2) {
  return n1 & n2;
}

function bitwiseOR(n1, n2) {
  return n1 | n2;
}

function bitwiseXOR(n1, n2) {
  return n1 ^ n2;
}

// Challenge Name: How Much is True?
// Challenge Difficulty: Medium
function countTrue(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == true) {
      count += 1;
    }
  }
  return count;
}

// Challenge Name: Tower of Hanoi
// Challenge Difficulty: Hard
function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
