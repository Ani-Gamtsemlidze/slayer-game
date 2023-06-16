attackButton = document.getElementById("attack-button");
specialAttackButton = document.getElementById("special");

monster = document.querySelector(".healthbar__value");
player = document.querySelector(".playerValue");

heal = document.querySelector("#heal");

surrender = document.querySelector("#give-up");

let monsterHealth = 100;
let yourHealth = 100;

let attackCount = 0;

let healing = document.querySelector(".healing-log");

let playerLiText;
let monsterLiText;

attackButton.addEventListener("click", function () {
  let attackNum = Math.trunc(Math.random() * 20) + 1;
  let attackPlayerNum = Math.trunc(Math.random() * 20) + 1;
  let newMonsterHealth = monsterHealth - attackNum;
  monsterHealth = newMonsterHealth;

  let newPlayerHealth = yourHealth - attackPlayerNum;
  yourHealth = newPlayerHealth;

  clickCounting();
  monster.style.width = `${monsterHealth}%`;
  player.style.width = `${yourHealth}%`;

  let playerLiText = document.createElement("li");
  let monsterLiText = document.createElement("li");

  document.querySelector(".list").appendChild(playerLiText);
  document.querySelector(".list").appendChild(monsterLiText);

  monsterLiText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackPlayerNum} DAMAGE`;
  monsterLiText.style.color = `#d02a2a`;
  monsterLiText.style.fontSize = `20px`;

  playerLiText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackNum} DAMAGE`;
  playerLiText.style.color = `#00a876`;
  playerLiText.style.fontSize = `20px`;
});

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

    //   monsterText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackNum} DAMAGE
    //   `;
    //   playerText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackPlayerNum} DAMAGE
    // `;
  }
  attackCount++;
  specialAttackButton.disabled = true;

  //   clickCount++;
  //   clickCounting();
});

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
  }
  heal.disabled = true;
  healingCount++;
  healing.innerHTML = `PLAYER GAINS ${yourHealth} HP`;
  // document.querySelector("healing-log").style.display = `block`;
});

surrender.addEventListener("click", function () {
  const confirmed = confirm("GIVE UP?");
  if (confirmed) {
    startAgain();
    // playerLiText.removeChild();
    // monsterLiText.removeChild();
  }
});

function startAgain() {
  monsterHealth = 100;
  yourHealth = 100;

  monster.style.width = `${monsterHealth}%`;
  player.style.width = `${yourHealth}%`;

  // monsterText.innerHTML = ` `;
  // playerText.innerHTML = ``;

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

  healing.innerHTML = ``;
}

function clickCounting() {
  if (monsterHealth < 0) {
    monsterHealth = 0;
    if (yourHealth <= 10) {
      yourHealth = 0;
      setTimeout(function () {
        alert(`It's a draw`);
        startAgain();
      }, 1000);
      attackButton.disabled = true;
    } else {
      setTimeout(function () {
        alert("YOU won");
        startAgain();
      }, 1000);
      attackButton.disabled = true;
    }
  } else if (yourHealth < 0) {
    yourHealth = 0;
    setTimeout(function () {
      alert("MONSTER won");
      startAgain();
    }, 1000);
    attackButton.disabled = true;
  }
}
