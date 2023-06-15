// attackButton = document.getElementById("attack-button");
// specialAttackButton = document.getElementById("special");

// monster = document.querySelector(".healthbar__value");
// player = document.querySelector(".playerValue");

// heal = document.querySelector("#heal");

// surrender = document.querySelector("#give-up");

// let monsterHealth = 100;
// let yourHealth = 100;

// let clickCount = 0;

// let monsterText = document.querySelector(".monster-log");
// let playerText = document.querySelector(".player-log");

// attackButton.addEventListener("click", function () {
//   if (clickCount < 5) {
//     let attackNum = Math.trunc(Math.random() * 20);
//     let attackPlayerNum = Math.trunc(Math.random() * 20);
//     let newMonsterHealth = monsterHealth - attackNum;
//     monsterHealth = newMonsterHealth;

//     let newPlayerHealth = yourHealth - attackPlayerNum;
//     yourHealth = newPlayerHealth;

//     monster.style.width = `${monsterHealth}%`;
//     player.style.width = `${yourHealth}%`;

//     monsterText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackNum} DAMAGE
//            `;
//     playerText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackPlayerNum} DAMAGE
//          `;
//     clickCount++;
//   }
//   clickCounting();
// });

// specialAttackButton.addEventListener("click", function () {
//   let attackNum = Math.trunc(Math.random() * 40);
//   let attackPlayerNum = Math.trunc(Math.random() * 40);
//   let newMonsterHealth = monsterHealth - attackNum;
//   monsterHealth = newMonsterHealth;

//   let newPlayerHealth = yourHealth - attackPlayerNum;
//   yourHealth = newPlayerHealth;

//   monster.style.width = `${monsterHealth}%`;
//   player.style.width = `${yourHealth}%`;

//   monsterText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackNum} DAMAGE
//   `;
//   playerText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackPlayerNum} DAMAGE
// `;

//   clickCount++;
//   clickCounting();
// });

// let healingCount = 0;

// heal.addEventListener("click", function () {
//   if (healingCount < 2) {
//     let attackNum = Math.trunc(Math.random() * 20);
//     player.style.width = `${yourHealth}%`;

//     let newPlayerHealth = yourHealth + attackNum;
//     yourHealth = newPlayerHealth;

//     if (yourHealth > 100) {
//       yourHealth = 100;
//     }
//   }
//   if (healingCount == 2) {
//     alert("You can HEALING only twice");
//   }
//   healingCount++;
// });

// surrender.addEventListener("click", function () {
//   const confirmed = confirm("Do you want to START OVER?");
//   if (confirmed) {
//     startAgain();
//   }
// });

// function startAgain() {
//   monsterHealth = 100;
//   yourHealth = 100;

//   monster.style.width = `${monsterHealth}%`;
//   player.style.width = `${yourHealth}%`;

//   monsterText.innerHTML = ` `;
//   playerText.innerHTML = ``;

//   clickCount = 0;
//   healingCount = 0;
// }

// function clickCounting() {
//   if (clickCount == 5) {
//     if (monsterHealth > yourHealth) {
//       alert("monster won");
//     }
//     if (monsterHealth < yourHealth) {
//       alert("you won");
//     }
//     startAgain();
//   }
// }

attackButton = document.getElementById("attack-button");
specialAttackButton = document.getElementById("special");

monster = document.querySelector(".healthbar__value");
player = document.querySelector(".playerValue");

heal = document.querySelector("#heal");

surrender = document.querySelector("#give-up");

let monsterHealth = 100;
let yourHealth = 100;

let clickCount = 0;

let monsterText = document.querySelector(".monster-log");
let playerText = document.querySelector(".player-log");

attackButton.addEventListener("click", function () {
  let attackNum = Math.trunc(Math.random() * 20) + 1;
  let attackPlayerNum = Math.trunc(Math.random() * 20) + 1;
  let newMonsterHealth = monsterHealth - attackNum;
  monsterHealth = newMonsterHealth;

  let newPlayerHealth = yourHealth - attackPlayerNum;
  yourHealth = newPlayerHealth;
  //   if (monsterHealth <= 10) {
  //     monsterHealth = 0;
  //     setTimeout(function () {
  //       alert("YOU won");
  //       startAgain();
  //     }, 0);
  //   }
  //   if (yourHealth <= 10) {
  //     yourHealth = 0;
  //     setTimeout(function () {
  //       alert("MONSTER won");
  //       startAgain();
  //     }, 0);
  //   }
  //   if (monsterHealth == 0 && yourHealth == 0) {
  //     setTimeout(function () {
  //       alert(`it's a draw`);
  //       startAgain();
  //     }, 0);
  //   }
  clickCounting();
  monster.style.width = `${monsterHealth}%`;
  player.style.width = `${yourHealth}%`;

  monsterText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackNum} DAMAGE
           `;
  playerText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackPlayerNum} DAMAGE
         `;

  //   clickCounting();
});

specialAttackButton.addEventListener("click", function () {
  let attackNum = Math.trunc(Math.random() * 40) + 1;
  let attackPlayerNum = Math.trunc(Math.random() * 40) + 1;
  let newMonsterHealth = monsterHealth - attackNum;
  monsterHealth = newMonsterHealth;

  let newPlayerHealth = yourHealth - attackPlayerNum;
  yourHealth = newPlayerHealth;

  clickCounting();

  monster.style.width = `${monsterHealth}%`;
  player.style.width = `${yourHealth}%`;

  monsterText.innerHTML = `MONSTER HIT THE PLAYER FOR ${attackNum} DAMAGE
  `;
  playerText.innerHTML = `PLAYER HIT THE MONSTER FOR ${attackPlayerNum} DAMAGE
`;

  //   clickCount++;
  //   clickCounting();
});

let healingCount = 0;

heal.addEventListener("click", function () {
  if (healingCount < 2) {
    let attackNum = Math.trunc(Math.random() * 20) + 1;

    let newPlayerHealth = yourHealth + attackNum;
    yourHealth = newPlayerHealth;
    if (yourHealth > 100) {
      yourHealth = 100;
    }
    player.style.width = `${yourHealth}%`;
  }
  if (healingCount == 2) {
    alert("You can HEALING only twice");
  }
  healingCount++;
});

surrender.addEventListener("click", function () {
  const confirmed = confirm("Do you want to START OVER?");
  if (confirmed) {
    startAgain();
  }
});

function startAgain() {
  monsterHealth = 100;
  yourHealth = 100;

  monster.style.width = `${monsterHealth}%`;
  player.style.width = `${yourHealth}%`;

  monsterText.innerHTML = ` `;
  playerText.innerHTML = ``;

  clickCount = 0;
  healingCount = 0;
}

function clickCounting() {
  if (monsterHealth <= 10) {
    monsterHealth = 0;
    if (yourHealth <= 10) {
      yourHealth = 0;
      setTimeout(function () {
        alert(`It's a draw`);
        startAgain();
      }, 0);
    } else {
      setTimeout(function () {
        alert("YOU won");
        startAgain();
      }, 0);
    }
  } else if (yourHealth <= 10) {
    yourHealth = 0;
    setTimeout(function () {
      alert("MONSTER won");
      startAgain();
    }, 0);
  }
}
