const test = [1, 2, 5];
const test2 = ["apple", "banana", "cheese"];

function ziplist(arr1, arr2) {
  let remix = "";
  let q = 0;
  let t = 0;
  for (let i in arr1) {
    remix += arr1[t];
    remix += ' ';
    remix += arr2[q];
    remix += ' ';
    q++;
    t++;
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