const campo = document.getElementById("campo");
const jogador = document.getElementById("jogador");
const btnIniciarVolta = document.getElementById("btnIniciarVolta");

let x = 0;
let y = 0;
let direcao = 1;

btnIniciarVolta.addEventListener("click", () => {

  const largura = campo.offsetWidth
  const altura = campo.offsetHeight
  const velocidade = 2;

  setInterval(() => {
    if (x + jogador >= largura) {
      y += velocidade * direcao;
      direcao = +1;
    } else if (y + jogador.offsetHeight >= altura) {
      x += velocidade * direcao;
    } else if (x) {
      y -= velocidade * direcao;
      direcao = 1;
    } else {
      x -= velocidade * direcao;
    }

    jogador.style.left = x + "px";
    jogador.style.top = y + "px";
  }, 10);
});