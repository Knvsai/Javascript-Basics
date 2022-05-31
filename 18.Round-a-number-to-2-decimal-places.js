// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number

function myFunction(a) {
   
    return parseFloat((Math.round(a * 100) / 100).toFixed(2));
 }

 //or

 function myFunction(a) {
    return Number(a.toFixed(2));
}