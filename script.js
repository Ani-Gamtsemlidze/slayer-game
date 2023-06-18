attackButton = document.getElementById("attack-button");
specialAttackButton = document.getElementById("special");

monster = document.querySelector(".healthbar__value");
player = document.querySelector(".playerValue");

heal = document.querySelector("#heal");

surrender = document.querySelector("#give-up");

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

let playerLiText;
let monsterLiText;

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

  surrender.addEventListener("click", function () {
    playerLiText.remove();
    monsterLiText.remove();
  });

  // if (monsterHealth < 0) {
  //   monsterHealth = 0;
  //   playerLiText.remove();
  //   monsterLiText.remove();
  // }

  monsterWon.style.display = "none";
  playerWon.style.display = "none";

  monsterLiText.style.color = `#d02a2a`;
  monsterLiText.style.fontSize = `20px`;

  // player texts

  playerLiText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackNum} DAMAGE`;
  playerLiText.classList.add("demo");
  playerLiText.style.color = `#00a876`;

  playerLiText.style.fontSize = `20px`;

  console.log(`Attack button clicked ${attackClick} times.`);
});

// SPECIAL attak function
specialAttackButton.addEventListener("click", function () {
  if (attackCount < 1) {
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

    monsterLiText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackPlayerNum} DAMAGE`;
    monsterLiText.classList.add("demo");
    monsterLiText.style.color = `#d02a2a`;
    monsterLiText.style.fontSize = `20px`;

    playerLiText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackNum} DAMAGE`;
    playerLiText.classList.add("demo");
    playerLiText.style.color = `#00a876`;

    playerLiText.style.fontSize = `20px`;
  }
  playerWon.style.display = "none";

  attackCount++;
  specialAttackButton.disabled = true;

  //   clickCount++;
  //   clickCounting();
});

// healing button function
let healingCount = 0;

heal.addEventListener("click", function () {
  if (healingCount < 1) {
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
    playerLiText.innerHTML = `PLAYER HEALS FOR ${attackNum} times`;
    playerLiText.style.color = `#00a876`;

    playerLiText.style.fontSize = `20px`;
    list.insertBefore(playerLiText, list.firstChild);
  }
  heal.disabled = true;
  healingCount++;
  healing.innerHTML = `PLAYER GAINS ${yourHealth} HP`;
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
    startAgain();
    // playerLiText.removeChild();
    // monsterLiText.removeChild();
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
}

// determine winner and looser

function clickCounting() {
  if (monsterHealth < 0) {
    monsterHealth = 0;
    if (yourHealth < 0) {
      yourHealth = 0;
      setTimeout(function () {
        alert(`It's a draw`);
        startAgain();
      }, 1000);
      attackButton.disabled = true;
    } else {
      setTimeout(function () {
        // alert("YOU won");
        playerWon.style.display = "block";
        playerWon.style.display = "flex";
        playerWon.style.justifyContent = "flex-start";

        playerPoints++;
        playerPoint.innerHTML = playerPoints;
        if (playerPoint.innerHTML == 5) {
          alert("GAME IS OVER. YOU WON");

          gameOverPoints();
        }

        startAgain();
      }, 1000);

      attackButton.disabled = true;
    }
  } else if (yourHealth < 0) {
    yourHealth = 0;
    setTimeout(function () {
      // alert("MONSTER won");
      monsterWon.style.display = "block";
      monsterWon.style.display = "flex";
      monsterWon.style.justifyContent = "flex-start";

      monsterPoints++;
      monsterPoint.innerHTML = monsterPoints;
      if (monsterPoint.innerHTML == 5) {
        alert("GAME IS OVER. MONSTER WON");
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

// listNum = 0;
// function removeListElements() {
//   listNum++;
//   const playerLi = document.querySelector(".list li:nth-child(1)")
//   const monsterLi = document.querySelector(".list li:nth-child(2)");
//   if (playerLi) {
//     playerLi.remove();
//   }

//   if (monsterLi) {
//     monsterLi.remove();
//   }
// }
