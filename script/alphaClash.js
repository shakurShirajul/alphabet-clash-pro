function continueGame(){
    // step -1: generate a random alphabet
    //  let alphabet = String.fromCharCode(Math.floor((Math.random() * 26) + 97));
    
    //step-2 : hide the start screen and show the game screen
    const alphabet = getARandomAlphabet();
    document.getElementById('currentAlphabet').innerText = alphabet;
    // document.querySelector(".startScreen").style.display="none";
    // document.querySelector(".gameScreen").style.display="flex";
    
    setBackgroundColorById(alphabet);
}

function playNow(){
    hideElementById('home');
    showElementById('playground')
    continueGame();
}