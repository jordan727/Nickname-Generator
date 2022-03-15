// Event Listeners
document.getElementById("btnRandom").addEventListener("click", randNick);
document.getElementById("btnAll").addEventListener("click", allNick);


// Nickname Array
let nicknameArray = ["Crusher", "The Scientist", "Twinkle-toes", "the Coder", "the Jester", "the Sloth", "Quick-Silver"];

// Random Nickname Function
function randNick() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let randIndex = Math.floor(Math.random() * nicknameArray.length);
    document.getElementById("names").innerHTML = firstName + ' "' + nicknameArray[randIndex] + '" ' + lastName;
}

// Nickname List Function
function allNick() {
    document.getElementById("names").innerHTML = "";
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    for (let n = 0; n < nicknameArray.length; n++) {
        let name = firstName + ' "' + nicknameArray[n] + '" ' + lastName;
        document.getElementById("names").innerHTML += "<br>" + name + "</br>";
    }
}