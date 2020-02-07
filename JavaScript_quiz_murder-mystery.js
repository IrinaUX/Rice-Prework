/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
//var room = ("dining", "ballroom", "gallery", "billiards");
//var suspect = ("Mr. Parkes", "Ms. Van Cleve", "Mrs. Sparr", "Mr. Kalehoff");
//var weapon = ("poison", "trophy", "pool stick", "knife");
var solved = false;
var room = "ballroom";
var suspect = "Mr. Parkes";
var weapon = "trophy";

if (room == "gallery") {
    weapon = "trophy"
} else if (room == "dining room") {
    weapon = "knife"
} else if (room == "billiards room") {
    weapon = "pool stick"
} else if (room == "ballroom") {
    weapon = "poison"
}

if (suspect == "Ms. Van Cleve") {
    suspectsRoom = "gallery"
} else if (suspect == "Mr. Parkes") {
    suspectsRoom = "dining room"
} else if (suspect == "Mrs. Sparr") {
    suspectsRoom = "billiards room"
} else if (suspect == "Mr. Kalehoff") {
    suspectsRoom = "ballroom"
}

if (room == suspectsRoom) {
    solved = true
} else {
    solved = false
}
   console.log(suspect + " did it in the " + room + " with the " + weapon + "!");

