// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function myFunction(a, b, c, d, e, f) {
    x = a+b
    y = x-c
    z = (y*d)/e
    p = z**f
    return p
 }
 // or
 function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }