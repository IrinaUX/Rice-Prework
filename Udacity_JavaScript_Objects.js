/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function() {
        if (umbrella.isOpen !== true) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    }
};

var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();


/*
 * Programming Quiz: Menu Items (7-2)
 */

// your code goes here
var breakfast = {
    price: "$9.95",
    name: "The Lumberjack",
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}
console.log(breakfast.name + " - " + breakfast.price);
console.log(breakfast.ingredients);


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function printAccountSummary(balance, interestRatePercent) {
        return ("Welcome!" + "\nYour balance is currently $" + savingsAccount.balance +
        " and your interest rate is " + savingsAccount.interestRatePercent + "%.")
    },
    // your code goes here
};


/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Irina",
    friends: 0,
    messages: [],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
        return facebookProfile.messages;
    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index,1);
        return facebookProfile.messages;
    },
    addFriend: function addFriend() {
        facebookProfile.friends += 1;
        return facebookProfile.friends;
    },
    removeFriend: function removeFriend() {
        facebookProfile.friends -= 1;
        return facebookProfile.friends;
    }
}
facebookProfile.postMessage("Hi there!");
facebookProfile.postMessage("It's me, Irina");
facebookProfile.deleteMessage(1);
console.log(facebookProfile.messages);
