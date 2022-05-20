
function changeDice ()
{
  var diceNumber = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
  var pickRandomDice1 = diceNumber[ Math.round( Math.random()*5 ) ];
  var pickRandomDice2 = diceNumber[ Math.round( Math.random()*5 ) ];

  document.querySelector(".img1").setAttribute("src", pickRandomDice1 );
  document.querySelector(".img2").setAttribute("src", pickRandomDice2 );

  if ( pickRandomDice1 > pickRandomDice2 )
  {
    document.querySelector("h1").textContent = "🎈 Player 1 wins";
  }
  else if ( pickRandomDice1 === pickRandomDice2 )
  {
    document.querySelector("h1").textContent = "Draw";
  }
  else
  {
    document.querySelector("h1").textContent = "Player 2 wins 🎈";
  }
}

document.getElementById("changeDice").onclick = function() { changeDice() };
