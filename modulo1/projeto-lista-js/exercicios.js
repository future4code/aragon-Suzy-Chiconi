// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
/*
// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------
*/
// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Informe a altura do retângulo"))
  const largura = Number(prompt("Informe a largura do retângulo"))
  const area = altura * largura 
  console.log(area)
  }
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Informe o ano atual"))
  const anoNascimento = Number(prompt("Informe o ano do seu nascimento"))
  const idade = anoAtual - anoNascimento 
  console.log(idade)
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    const imc = peso / (altura * altura)
    return (imc)
}
calculaIMC(58, 1.54)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Informe o seu nome")
  const idade = prompt("Informe a sua idade")
  const email = prompt("Informe o seu e-mail")
  const dadosUsuario = `Meu nome é ${nome}, tenho ${idade} anos, e o meu e-mail é ${email}.`
  console.log(dadosUsuario)  
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const coresFavoritas = []
  const cor1 = prompt("Informe a sua primeira cor favorita")
  const cor2 = prompt("Informe a sua segunda cor favorita")
  const cor3 = prompt("Informe a sua terceira cor favorita")
  adicionandoCores = coresFavoritas.push(cor1, cor2, cor3)
  console.log(coresFavoritas)
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const texto = "Sextou, turma!"
  return(texto.toUpperCase())
}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const valorEspetaculo = Number(10800)
  const precoIngresso = Number(54)
  const totalVendas = valorEspetaculo / precoIngresso
  return(totalVendas)
}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const texto1 = "Olá"
  const texto2 = "Boa tarde"
  const tamanhoTexto1 = texto1.length
  const tamanhoTexto2 = texto2.length
  const comparacao = tamanhoTexto1 === tamanhoTexto2
  return(comparacao)
}
checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    const listaDeCompras = ["ovos", "leite", "queijo", "frutas"]
    const primeiroItem = 0
    return(listaDeCompras[primeiroItem])
}
retornaPrimeiroElemento()

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
    const moveis = ["mesa", "cadeira", "armário", "cama", "criado-mudo", "cômoda", "guarda-roupa", "estante", "poltrona", "sofá"]
    const ultimoMovel = 9
    return(moveis[ultimoMovel])
}
retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const frutas = ["laranja", "banana", "maçã"];
  frutas.reverse()
  return frutas
}
trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const texto1 = "Vamos estudar?"
  const texto2 = "VAMOS ESTUDAR?"
  const textos = texto1 === texto2
  return textos.toLowerCase().includes()
}
checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}