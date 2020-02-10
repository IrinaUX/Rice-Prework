/**********************************************
* this content is from quiz of Udacity JavaScript introductory course
*/

// your code goes here
function laugh() {
    var output = "hahahahahahahahahaha!";
    return output;
}
console.log(laugh());

/**********************************************
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
 function laugh(num) {
     var laughter = "ha";
     return (laughter.repeat(num) + "!")
 }
 console.log(laugh(4))

/**********************************************
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(length) {
    triangle="";
    for (var i = 1; i <= length; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}

// your code goes here.  Make sure you call makeLine() in your own code.
// test your code by uncommenting the following line
//console.log(makeLine(5))
console.log(buildTriangle(5));

/**********************************************
/*
 * Programming Quiz: Laugh (5-4)
 */
/* finish the function expression */

var laugh = function(num) {
    laughter = "ha";
    return (laughter.repeat(num) + "!");
}

console.log(laugh(2));

/**********************************************
/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here

var cry = function sad() {
    var output = "boohoo!";
    return output;
}

console.log(cry());

/**********************************************
/*
 * Programming Quiz: Inline Functions (5-6)
 * Directions:
 * Call the emotions() function so that it prints the output you see below, 
 * but instead of passing the laugh() function as an argument, 
 * pass an inline function expression instead.
 ** emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
 **Prints: "I am happy, haha!"
 */
// don't change this code

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("happy", function(num) {
    laughter = "ha";
    return (laughter.repeat(num) + "!");
    } );
 
/**********************************************

*/

