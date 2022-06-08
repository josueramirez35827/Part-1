function findDuplicates(str) {
  const result = [];
  const s = str.toLowerCase();
  const arr = s.split(" ");
  const count = {};
  arr.forEach((word) => {
    if (!count[word]) {
      count[word] = 1;
    } else {
      count[word] += 1;
    }
  });
  let all = Object.keys(count);
  all.forEach((key) => {
    if (count[key] > 1) {
      result.push(key);
    }
  });
  return result;
}

console.log(findDuplicates("I give up and i give up and i give up and i give up"))