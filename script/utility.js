function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const  element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    // console.log(elementId);
}

function removeBackgroundColorById(elementId){
    const  element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
    // console.log(elementId);
}

function getARandomAlphabet(){
    // get or create an alphabet array
    const  alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split(' ');

    // get a random index between 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    return  alphabetString[index];
}
function key(keyName){
    return keyName;
}
let score = 0;

