/*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.*/
 function squareSum(numbers){
    return numbers.reduce(function(sum,n){
     return(n*n)+sum;
    },0)
  }
  //This function, squareSum, takes an array of numbers as input and returns the sum of the squares of each number in the array. Here's how it works:
  //The reduce method takes two arguments: a callback function and an initial value. The callback function takes two arguments: an accumulator (in this case, the running sum) and the current element in the array being processed.
  //In this function, the callback function squares the current element (n) using the * operator and adds it to the running sum (sum). The result of this operation becomes the new value of sum, and the process repeats for each element in the array.
  //Finally, when all elements in the array have been processed, the final value of sum is returned by the reduce method as the result of the function.