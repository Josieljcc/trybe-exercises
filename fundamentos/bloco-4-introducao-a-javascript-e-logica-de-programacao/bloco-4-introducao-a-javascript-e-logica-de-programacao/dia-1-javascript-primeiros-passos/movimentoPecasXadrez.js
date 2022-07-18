function movimentoPecasXadrez(peca) {
  if (peca.toLowerCase() == "cavalo") {
    return "O movimento executado pelo Cavalo é conhecido por um-dois ou em L";
  }
  if (peca.toLowerCase() == "dama" || peca.toLowerCase() == "rainha") {
    return "Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.";
  }
  if (peca.toLowerCase() == "bispo") {
    return "Move-se na diagonal,";
  }
  if (peca.toLowerCase() == "peão") {
    return "Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.";
  }
  if (peca.toLowerCase() == "rei") {
    return "Pode mover-se em qualquer direção, porém apenas uma casa por vez, como indicam os pontos vermelhos na figura abaixo.";
  }
  if (peca.toLowerCase() == "torre") {
    return "Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.";
  }
  return "não existe essa peça";
}

console.log(movimentoPecasXadrez("rainha"));
