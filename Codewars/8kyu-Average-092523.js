/*Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.*/
function findAverage(array) {
  // your code here
  let sum =array.reduce((x,y) => x+y,0)
  let avg=array.length
  return sum/avg || 0

  //return 0;
}