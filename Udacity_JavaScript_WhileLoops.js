var x = 1;

while (x <= 20) {
    if ((x % 3 === 0) && (x % 5 !== 0)) {
        console.log("Julia");
        x = x + 1;
        continue;
    } else if ((x % 3 !== 0) && (x % 5 === 0)) {
        console.log("James");
        x = x + 1;
        continue;
    } else if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log("JuliaJames");
        x = x + 1;
        continue;
    } else {
        console.log(x);
        x = x + 1;
        continue;
    }  
    x = x + 1
}

/* from Udacity JavaScript introduction course */
/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
    
    if (num === 2) {
        console.log((num) + " bottles of juice on the wall! " +
        (num) + " bottles of juice! Take one down, pass it around... " +
        (num-1) + " bottle of juice on the wall!")
        num = num - 1;
        continue;
    } else if (num === 1) {
        console.log((num) + " bottle of juice on the wall! " +
        (num) + " bottle of juice! Take one down, pass it around... " +
        (num-1) + " bottles of juice on the wall!")
        num = num - 1;
        continue;
    } else {
        console.log((num) + " bottles of juice on the wall! " +
        (num) + " bottles of juice! Take one down, pass it around... " +
        (num-1) + " bottles of juice on the wall!")
        num = num - 1;
        continue;
    }
    
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var sec = 60;

while (sec >= 0) {
    if (sec === 50 ) {
        console.log("Orbiter transfers from ground to internal power");
        sec = sec - 1;
        continue;
    } else if (sec === 31) {
        console.log("Ground launch sequencer is go for auto sequence start")
        sec = sec - 1;
        continue;
    } else if (sec === 16) {
        console.log("Activate launch pad sound suppression system")
        sec = sec - 1;
        continue;
    } else if (sec === 10) {
        console.log("Activate main engine hydrogen burnoff system")
        sec = sec - 1;
        continue;
    } else if (sec === 6) {
        console.log("Main engine start")
        sec = sec - 1;
        continue;
    } else if (sec === 0) {
        console.log("Solid rocket booster ignition and liftoff!")
        sec = sec - 1;
        continue;
    } else {
        console.log("T-" + sec + " seconds");
        sec = sec - 1;
        continue;
    }
}
