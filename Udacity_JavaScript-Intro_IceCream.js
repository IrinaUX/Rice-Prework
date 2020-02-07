/*
 * Programming Quiz: Ice Cream (3-6)
 * From Udacity JavaScript Introductory course work
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cups";
var toppings = "sprinkles";

// Add your code here

if (
  (flavor === "chocolate" || flavor === "vanilla") &&
  (vessel === "cone" || vessel === "bowl") &&
  (toppings === "peanuts" || toppings === "sprinkles")
) {
  console.log("I'd like two scoops of " +
    flavor + " ice cream in a " +
    vessel + " with " +
    toppings + ".");
}
