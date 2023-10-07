const isPalindrome =(x) => {
    return x.split('').reverse().join('').toLowerCase()=== x.toLowerCase() ? true :false
    // your code here
  }

//or if ya want to do it the long way
function isPalindrome(x) {
    // your code here
    //split string, reverse string, join back together sring
    let reverseString= x.split('').reverse().join('')
    if(reverseString.toLowerCase() == x.toLowerCase()){
     return true
    }else{
      return false
    }
   
  }