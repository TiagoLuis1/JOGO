const dino = document.querySelector(".dino");
const cacto = document.querySelector(".cacto");
const score = document.querySelector(".score");
let alreadyJump = false;
let count = 0;

document.addEventListener("keydown", (e) => {
  if ((e.code === "ArrowUp") | (e.code === "Space")) { /*Define a seta para cima ou o botão ESPAÇO para executar o pulo */
    jump();
  }
});

function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    alreadyJump = true;

    setTimeout(() => {
      dino.classList.remove("jump"); /*Velocidade definida para o pulo do dinossauro */
      alreadyJump = false;
    }, 1100);
  }
}

setInterval(() => {
  let dinoBottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("bottom")
  );
  let cactoLeft = parseInt(
    window.getComputedStyle(cacto).getPropertyValue("left")
  );

  if (cactoLeft > 40 && cactoLeft < 270 && dinoBottom <= 50 && !alreadyJump) { /*Define onde o objeto cacto vei ser reconhecido,no caso o objeto inteiro conta como físico */
    alert(`Voce perdeu! Sua pontuação: ${count}`);                             /*Começa a reconhecer o dinossauro a partir da parte fina da cauda*/
    count = 0;
  }

  count++;
  score.innerHTML = `SCORE: ${count}`; /*A cada cacto que pula,adiciona uma pontuação*/
}, 30);