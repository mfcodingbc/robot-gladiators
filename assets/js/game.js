//This creates a user prompt wherein a user inputs their data (robot name in this case)
//The variable 'playerName' will contain the input and will be called when utilized later in code

var playerName = window.prompt("What is your robot's name?");
console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10+10);
console.log("Our robot's name is " + playerName);
// window.alert(playerName);
//Alerts are for the user, not necessarily for developer (limit alerts for user)
//

// This creates a function name "fight"

function fight() {
    window.alert("The fight has begun!");
}

// fight();