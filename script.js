const campo = document.getElementById("campo");
const jogador = document.getElementById("jogador");
const button = document.getElementById("btnIniciarVolta");

let speed = 1;

addEventListener("click", (e) => {
  var id = setInterval(mover, speed);

  let largura = campo.scrollWidth - 20;
  let altura = campo.scrollHeight - 20;

  let x = 0;
  let y = 0;
  let direcao = "baixo";
  let completouVolta = false;

  function mover() {
    switch (direcao) {
      case "baixo":
        if (y < altura) {
          y += speed;
        } else {
          direcao = "direita";
        }
        break;
      case "direita":
        if (x < largura) {
          x += speed;
        } else {
          direcao = "cima";
        }
        break;
      case "cima":
        if (y > 0) {
          y -= speed;
        } else {
          direcao = "esquerda";
        }
        break;
      case "esquerda":
        if (x > 0) {
          x -= speed;
        } else {
          direcao = "parado";
          completouVolta = true;
        }
        break;
    }

    jogador.style.left = x + "px";
    jogador.style.top = y + "px";

    if (completouVolta) {
      clearInterval(id);
    }
  }
});
