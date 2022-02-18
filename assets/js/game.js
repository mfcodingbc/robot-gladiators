// A welcome alert to users upon opening the page.
window.alert("Welcome to Robot Gladiators!");
// This prompt runs after alert is closed and will store user input in variable 'playerName'
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
// A fight alert letting users know they are about to start a fight
    window.alert("The battle is about to begin!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log(promptFight);
//if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
        console.log(
        playerName + " attacked " + enemyName + ". "  + enemyName + " now has " + enemyHealth + " health remaining."
            );

    // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has become scrap!");
        } 
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

    // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has broken down!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
//if player choses to skip
    else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
        }
    // if no (false), ask question again by running fight() again
        else {
            fight();
        }
        
        if (playerHealth === 0) {
            console.log("This will not run.");
        } 
        else {
            console.log("This will run instead.");
        }
    }
}

//This runs the code in the page:
fight();