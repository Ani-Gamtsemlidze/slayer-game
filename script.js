attackButton = document.getElementById("attack-button");
specialAttackButton = document.getElementById("special");

monster = document.querySelector(".healthbar__value");
player = document.querySelector(".playerValue");

heal = document.querySelector("#heal");

surrender = document.querySelector("#give-up");

let header = document.querySelector("header");

// document.querySelector(".monster-box").style.display = "block";

let gameStart = true;

let monsterHealth = 100;
let yourHealth = 100;

let attackCount = 0;

let healing = document.querySelector(".healing-log");

let attackClick = 0;

let monsterPoint = document.getElementById("monster-point");
let playerPoint = document.getElementById("player-point");

let monsterPoints = 0;
let playerPoints = 0;

let playerLiTextArray = [];
let monsterLiTextArray = [];

let monsterWon = document.querySelector(".monster-winner");
let playerWon = document.querySelector(".player-winner");

// ATTACK button function
attackButton.addEventListener("click", function () {
  attackClick++;

  let attackNum = Math.trunc(Math.random() * 20) + 1;
  let attackPlayerNum = Math.trunc(Math.random() * 20) + 1;
  let newMonsterHealth = monsterHealth - attackNum;
  monsterHealth = newMonsterHealth;

  let newPlayerHealth = yourHealth - attackPlayerNum;
  yourHealth = newPlayerHealth;

  clickCounting();
  monster.style.width = `${monsterHealth}%`;
  player.style.width = `${yourHealth}%`;

  playerLiText = document.createElement("li");
  monsterLiText = document.createElement("li");
  playerLiTextArray.push(playerLiText);
  monsterLiTextArray.push(monsterLiText);

  document.querySelector(".list").appendChild(playerLiText);
  document.querySelector(".list").appendChild(monsterLiText);

  const list = document.querySelector(".list");

  list.insertBefore(playerLiText, list.firstChild);
  list.insertBefore(monsterLiText, list.firstChild);
  // insert before

  // monster texts

  monsterLiText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackPlayerNum} DAMAGE`;

  monsterLiText.classList.add("demo");
  playerLiText.classList.add("demo");

  document.querySelector(".scroll").style.height = "200px";
  document.querySelector(".scroll").style.overflowY = "scroll";

  // monsterWon.style.display = "none";
  // playerWon.style.display = "none";

  monsterLiText.style.color = `#d02a2a`;
  monsterLiText.style.fontSize = `20px`;

  // player texts

  playerLiText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackNum} DAMAGE`;
  playerLiText.style.color = `#00a876`;

  playerLiText.style.fontSize = `20px`;

  document.querySelector(".monster-box").style.opacity = "0";
  document.querySelector(".player-box").style.opacity = "0";

  console.log(`Attack button clicked ${attackClick} times.`);

  attackButton.style.backgroundColor = "";
  attackButton.style.borderColor = "";
  attackButton.style.transform = "";

  header.style.backgroundColor = "";
  document.querySelector(".monster-slayer").innerHTML = "Monster Slayer";
  // document.querySelector(".monster-slayer").style.fontSize = "";

  document.querySelector(".draw-box").style.opacity = "0";
});

// SPECIAL attak function
specialAttackButton.addEventListener("click", function () {
  if (attackCount < 1) {
    attackCount++;
    let attackNum = Math.trunc(Math.random() * 40) + 1;
    let attackPlayerNum = Math.trunc(Math.random() * 40) + 1;
    let newMonsterHealth = monsterHealth - attackNum;
    monsterHealth = newMonsterHealth;

    let newPlayerHealth = yourHealth - attackPlayerNum;
    yourHealth = newPlayerHealth;

    clickCounting();

    monster.style.width = `${monsterHealth}%`;
    player.style.width = `${yourHealth}%`;

    // player li creation on special attack

    let playerLiText = document.createElement("li");
    let monsterLiText = document.createElement("li");

    document.querySelector(".list").appendChild(playerLiText);
    document.querySelector(".list").appendChild(monsterLiText);

    const list = document.querySelector(".list");

    playerLiTextArray.push(playerLiText);
    monsterLiTextArray.push(monsterLiText);

    // playerLiTextArray.push(playerLiText);
    // monsterLiTextArray.push(monsterLiText);

    monsterLiText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackPlayerNum} DAMAGE`;
    monsterLiText.classList.add("demo");
    monsterLiText.style.color = `#d02a2a`;
    monsterLiText.style.fontSize = `20px`;

    playerLiText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackNum} DAMAGE`;
    playerLiText.classList.add("demo");
    playerLiText.style.color = `#00a876`;

    playerLiText.style.fontSize = `20px`;

    list.insertBefore(playerLiText, list.firstChild);
    list.insertBefore(monsterLiText, list.firstChild);
  }
  // playerWon.style.display = "none";

  attackCount++;
  specialAttackButton.disabled = true;

  //   clickCount++;
  //   clickCounting();
});

// healing button function
let healingCount = 0;

heal.addEventListener("click", function () {
  if (healingCount < 1) {
    attackClick++;
    let attackNum = Math.trunc(Math.random() * 20) + 1;

    let newPlayerHealth = yourHealth + attackNum;
    yourHealth = newPlayerHealth;
    if (yourHealth > 100) {
      yourHealth = 100;
    }
    player.style.width = `${yourHealth}%`;

    let playerLiText = document.createElement("li");
    document.querySelector(".list").appendChild(playerLiText);

    const list = document.querySelector(".list");

    playerLiTextArray.push(playerLiText);

    playerLiText.innerHTML = `PLAYER HEALS FOR ${attackNum} TIMES`;
    playerLiText.style.color = `#00a876`;

    playerLiText.style.fontSize = `20px`;
    list.insertBefore(playerLiText, list.firstChild);
  }
  heal.disabled = true;
  healingCount++;
  // healing.innerHTML = `PLAYER GAINS ${yourHealth} HP`;
});

// giving up function

surrender.addEventListener("click", function () {
  const confirmed = confirm("GIVE UP?");
  if (confirmed) {
    // location.reload();
    playerPoints = 0;
    playerPoint.innerHTML = playerPoints;
    monsterPoints = 0;
    monsterPoint.innerHTML = monsterPoints;

    document.querySelector(".monster-box").style.opacity = "0";
    document.querySelector(".player-box").style.opacity = "0";
    startAgain();
  }
});

// reset game
function startAgain() {
  attackClick = 0;
  monsterHealth = 100;
  yourHealth = 100;

  monster.style.width = `${monsterHealth}%`;
  player.style.width = `${yourHealth}%`;

  attackCount = 0;
  healingCount = 0;

  heal.style.backgroundColor = "";
  heal.style.color = "";

  specialAttackButton.style.backgroundColor = "";
  specialAttackButton.style.color = "";
  specialAttackButton.style.borderColor = "";

  attackButton.disabled = false;
  specialAttackButton.disabled = false;
  heal.disabled = false;

  document.querySelector(".scroll").style.height = "";

  removeLiTexts();
}

// determine winner and looser

function clickCounting() {
  if (monsterHealth < 0) {
    monsterHealth = 0;
    if (yourHealth < 0) {
      yourHealth = 0;
      setTimeout(function () {
        // alert(`It's a draw`);
        // document.querySelector(".monster-box").style.opacity = "1";
        // document.querySelector("#youWon").innerHTML = "IT'S A DRAW";
        document.querySelector(".draw-box").style.opacity = "1";
        document.querySelector(".mobile-box").style.opacity = "0";
        // document.querySelector(".player-box").style.top = "-5%";
        // document.querySelector(".player-box").style.color = "black";
        // document.querySelector("#youWon").innerHTML = "IT'S A DRAW!";
        startAgain();
      }, 1000);
      attackButton.disabled = true;
    } else {
      setTimeout(function () {
        document.querySelector(".player-box").style.opacity = "1";
        document.querySelector(".mobile-box").style.opacity = "0";

        // alert("YOU won");

        playerPoints++;
        playerPoint.innerHTML = playerPoints;
        if (playerPoint.innerHTML == 1) {
          document.querySelector(".monster-slayer").innerHTML =
            "YOU ARE A WINNER. PLAY AGAIN!";
          // document.querySelector(".monster-slayer").style.fontSize = "20px";

          document.querySelector(".mobile-box").style.opacity = "1";

          attackButton.style.backgroundColor = "#00a876";
          attackButton.style.borderColor = "#00a876";
          attackButton.style.transform = "scale(1.1)";
          document.querySelector("header").style.backgroundColor = "#00a876";

          document.querySelector(".monster-box").style.opacity = "0";
          document.querySelector(".player-box").style.opacity = "0";

          gameOverPoints();
        }
        startAgain();
      }, 1000);

      attackButton.disabled = true;
    }
  } else if (yourHealth < 0) {
    yourHealth = 0;
    setTimeout(function () {
      document.querySelector(".monster-box").style.opacity = "1";
      document.querySelector(".mobile-box").style.opacity = "0";

      monsterPoints++;
      monsterPoint.innerHTML = monsterPoints;
      if (monsterPoint.innerHTML == 1) {
        document.querySelector(".monster-slayer").innerHTML =
          "MONSTER IS A WINNER. PLAY AGAIN!";
        // document.querySelector(".monster-slayer").style.fontSize = "20px";
        document.querySelector("header").style.backgroundColor = "#d02a2a";
        attackButton.style.backgroundColor = "#d02a2a";
        document.querySelector(".mobile-box").style.opacity = "1";

        document.querySelector(".monster-box").style.opacity = "0";
        document.querySelector(".player-box").style.opacity = "0";

        attackButton.style.backgroundColor = "#d02a2a";
        attackButton.style.borderColor = "#d02a2a";
        attackButton.style.transform = "scale(1.1)";
        gameOverPoints();
      }
      startAgain();
    }, 1000);

    attackButton.disabled = true;
  }
}

function gameOverPoints() {
  monsterPoints = 0;
  monsterPoint.innerHTML = monsterPoints;
  playerPoints = 0;
  playerPoint.innerHTML = playerPoints;
}

// function removeLiTexts() {
//   for (let i = 0; i < playerLiTextArray.length; i++) {
//     playerLiTextArray[i].remove();
//     monsterLiTextArray[i].remove();
//   }

//   // Clear the arrays
//   playerLiTextArray = [];
//   monsterLiTextArray = [];
// }

function removeLiTexts() {
  const list = document.querySelector(".list");

  for (let i = 0; i < playerLiTextArray.length; i++) {
    if (playerLiTextArray[i]) {
      playerLiTextArray[i].remove();
    }
    if (monsterLiTextArray[i]) {
      monsterLiTextArray[i].remove();
    }
  }

  // Clear the arrays
  playerLiTextArray = [];
  monsterLiTextArray = [];
}

// Define the media query
var mediaQuery = window.matchMedia("(max-width: 992px)");

// Define a callback function to be executed when the media query matches
function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    attackButton.addEventListener("click", function () {
      document.querySelector(".mobile-box").style.opacity = "1";
    });
    document.querySelector(".player-main").style.marginTop = "100px";
    document.querySelector(".monster-slayer").style.fontSize = "18px";

    console.log("Viewport width is less than or equal to 992px");
    // Add your code here for handling the media query
  } else {
    console.log("Viewport width is greater than 992px");
    // Add your code here for handling the condition
  }
}

// // Add an event listener to the media query
// mediaQuery.addListener(handleMediaQueryChange);

// // Call the callback function initially to handle the initial state of the media query
handleMediaQueryChange(mediaQuery);
