

let randomNumber1 = Math.floor(Math.random() * 6 + 1)///1-6
let randomDiceImage = 'dice'+ randomNumber1 + '.png' //dice1.png - dice6.png//add the file format to specify the prefered file
let randomImage = "images/"+randomDiceImage // images/dice1.png -dice6.png
let image1 = document.querySelectorAll("img")[0] //the first image tag

image1.setAttribute("src", randomImage) 

let randomNumber2 = Math.floor((Math.random()*6)+ 1)
let randomImage2 = "images/dice"+ randomNumber2 + '.png'
document.querySelectorAll("img")[1].setAttribute("src", randomImage2)



//If player 1 wins
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Wins🚩"
}

//If player 2 wins
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player 2 Wins🚩"
}

//if it is a draw
else(
    document.querySelector("h1").innerText = "It's a Draw!"
)