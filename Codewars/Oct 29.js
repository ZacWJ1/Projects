function gimme (triplet) {

    const middle =triplet.concat().sort(function(a, b) {
    return a - b})[1]
    
    return triplet.indexOf(middle)
   
  }