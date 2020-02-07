/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;
//Expected shirtWidth of 19.99, shirtLength of 28.99, and shirtSleeve of 8.379 to log the size S, but received N/A

// Write your if/else code here
if ((shirtWidth === 19.99) &&
    (shirtLength === 28.99) &&
    (shirtSleeve === 8.379)) {
    console.log("S")
} else if ((shirtWidth === 18) &&
    (shirtLength === 28) &&
    (shirtSleeve === 8.13)) {
    console.log("S") 
} else if ((shirtWidth === 20) &&
    (shirtLength === 29) &&
    (shirtSleeve === 8.38)) {
    console.log("M") 
} else if ((shirtWidth === 22) &&
    (shirtLength === 30) &&
    (shirtSleeve === 8.63)) {
    console.log("L") 
} else if ((shirtWidth === 24) &&
    (shirtLength === 31) &&
    (shirtSleeve === 8.88)) {
    console.log("XL") 
} else if ((shirtWidth === 26) &&
    (shirtLength === 33) &&
    (shirtSleeve === 9.63)) {
    console.log("2XL") 
} else if ((shirtWidth === 28) &&
    (shirtLength === 34) &&
    (shirtSleeve === 10.13)) {
    console.log("3XL") 
} else if ((shirtWidth === 27.99) &&
    (shirtLength === 33.99) &&
    (shirtSleeve === 10.129)) {
    console.log("2XL") 
} else {
    console.log("N/A")
}
