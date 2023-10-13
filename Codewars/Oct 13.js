// write the function isAnagram
var isAnagram = function(test, original) {
    const t= test.toLowerCase().split('').sort().join('')
    const og=original.toLowerCase().split('').sort().join('')
    
    return (t===og)? true:false
  };