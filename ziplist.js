const test = [1, 2, 5];
const test2 = ["apple", "banana", "cheese"];

function ziplist(arr1, arr2) {
  let remix = [];
  for (let i = 0; i < arr2.length; i++) {
    remix.push(arr1[i], arr2[i]);
  }
  return remix;
}

console.log(ziplist(test, test2)); //output is good

function ziplistTheSimpleWay(arr1, arr2) {
  // uses underscore
  let zip = _.zip(arr1, arr2);
  zip = _.flatten(zip);
  return zip;
}

console.log(ziplistTheSimpleWay(test, test2)); // still nested inside an array