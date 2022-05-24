// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
    count  = 0;
    for(x in b){
    if(b[x] == a){
    count++
    }
    }
    return count
    
 }

 // or

 function myFunction(a, b) {
    return b.split(a).length - 1
  }