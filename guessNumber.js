var askNumber = "Please! Enter the number to guess";
    var inputGuess = prompt(askNumber);
    while(inputGuess !== "7"){
        
        inputGuess = prompt("Your answer was not correct\n"+askNumber);
    }
    alert ("Correct guess: " + inputGuess);