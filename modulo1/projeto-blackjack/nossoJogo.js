console.log("Boas vindas ao jogo Blackjack!")

if(confirm("Quer iniciar uma nova rodada?")) {
   let primeiraCartaUsuario = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
   let primeiraCartaComputador = comprarCarta()
   let segundaCartaComputador = comprarCarta()
   
   let pontosUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   let pontosComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} e ${segundaCartaUsuario.texto} - ${pontosUsuario} pontos`)
   console.log(`Computador - cartas: ${primeiraCartaComputador.texto} e ${segundaCartaComputador.texto} - ${pontosComputador} pontos`)
   
      if (pontosUsuario > pontosComputador && pontosUsuario > 21) {
      console.log("O computador ganhou!")
      } else if (pontosUsuario > pontosComputador) {
      console.log("O usuário ganhou!")
      } else if (pontosComputador > pontosUsuario && pontosComputador > 21) {
      console.log("O usuário ganhou!")
      } else if (pontosComputador > pontosUsuario) {
      console.log("O computador ganhou!")
      } else if (pontosUsuario === pontosComputador) {
      console.log("Empate!")   
      }
   
} else {
console.log("O jogo acabou")
}