document.addEventListener("DOMContentLoaded", function() {
    const gameOutput = document.getElementById("game-output");
    const gameInput = document.getElementById("game-input");
    const gameButton = document.getElementById("game-button");

    let playerName;
    let inventory = [];

    function appendOutput(text) {
        gameOutput.textContent += text + "\n";
        gameOutput.scrollTop = gameOutput.scrollHeight;
    }

    function startGame() {
        appendOutput("Welcome to the Text Adventure Game!");
        appendOutput("Enter your name, brave adventurer:");
        gameInput.value = "";
        gameButton.onclick = enterName;
    }

    function enterName() {
        playerName = gameInput.value.trim();
        if (playerName === "") return;
        appendOutput("Hello, " + playerName + "! Your adventure begins now.");
        appendOutput("You find yourself at a crossroad. Do you go 'left' or 'right'?");
        gameInput.value = "";
        gameButton.onclick = chooseDirection;
    }

    function chooseDirection() {
        const choice = gameInput.value.trim().toLowerCase();
        gameInput.value = "";
        if (choice === "left") {
            goLeft();
        } else if (choice === "right") {
            goRight();
        } else {
            appendOutput("Invalid choice. The adventure ends here.");
            endAdventure();
        }
    }

    function goLeft() {
        appendOutput("You went left and encountered a friendly wizard.");
        appendOutput("The wizard offers you a choice between a 'potion' or a 'sword'. What do you choose?");
        gameButton.onclick = chooseItem;
    }

    function chooseItem() {
        const choice = gameInput.value.trim().toLowerCase();
        gameInput.value = "";
        if (choice === "potion") {
            appendOutput("You chose the potion. You feel a surge of strength!");
            inventory.push("potion");
        } else if (choice === "sword") {
            appendOutput("You chose the sword. You feel ready for battle!");
            inventory.push("sword");
        } else {
            appendOutput("The wizard looks confused. The adventure ends here.");
            endAdventure();
            return;
        }
        appendOutput("You come across a locked door with a riddle. Solve the riddle to proceed.");
        appendOutput("Riddle: What has keys but can't open locks?");
        gameButton.onclick = solveRiddle;
    }

    function solveRiddle() {
        const answer = gameInput.value.trim().toLowerCase();
        gameInput.value = "";
        if (answer === "piano") {
            appendOutput("Correct! The door opens, and you continue your adventure.");
            // Continue the adventure or add more choices
        } else {
            appendOutput("Incorrect! The door remains locked. The adventure ends here.");
        }
        endAdventure();
    }

    function goRight() {
        appendOutput("You went right and encountered a fearsome dragon.");
        appendOutput("Do you choose to 'fight' the dragon or 'run' away?");
        gameButton.onclick = encounterDragon;
    }

    function encounterDragon() {
        const choice = gameInput.value.trim().toLowerCase();
        gameInput.value = "";
        if (choice === "fight") {
            appendOutput("You chose to fight the dragon. After a fierce battle, you emerge victorious!");
            if (inventory.includes("sword")) {
                appendOutput("Your sword helped you in the fight!");
            }
        } else if (choice === "run") {
            appendOutput("You chose to run away. You live to fight another day!");
        } else {
            appendOutput("The dragon roars in confusion. The adventure ends here.");
        }
        endAdventure();
    }

    function endAdventure() {
        appendOutput("Thank you for playing, " + playerName + "!");
        appendOutput("The adventure ends here. Goodbye!");
        gameButton.onclick = null;
    }

    startGame();
});
