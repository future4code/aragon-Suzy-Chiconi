//Exercícios de interpretação de código
/*
1- Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado)

    RESPOSTAS:
    a.  false
    b.  false
    c.  true
    d.  boolean

2- Seu colega se aproxima de você falando que o código dele não funciona como devia.
   Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)

    RESPOSTA:
    Será impresso 12, porque o prompt retorna string, e não número, portanto não vai realizar uma operação
    matemática, e sim mostrar o que foi escrito pelo usuário como texto.

3- Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, 
   de fato, a soma dos dois números.

    RESPOSTA:
    Ele deve converter o texto para número, inserindo o comando Number() antes do prompt.
    */

//Exercícios de escrita de código
/*
1. Faça um programa que:
    
    a) Pergunte a idade do usuário;    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga;    
    c) **Imprima no console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
    seguido pela resposta (`true` ou `false`);    
    d) **Imprima no console** a diferença de idade (não tem problema se sair um número negativo)
*/
let idade = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))
let maiorIdade = idade >= idadeAmigo
let diferencaDeIdade = idade - idadeAmigo

console.log("Sua idade é maior que a do seu melhor amigo?", maiorIdade)
console.log("A diferença de idade entre você e seu amigo é de", diferencaDeIdade, "anos")

/*
2. Faça um programa que:    
    a) Peça ao usuário que insira um número **par;**    
    b) Imprima no console **o resto da divisão** desse número por 2;    
    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código;    
    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código;
*/
let numeroPar = Number(prompt("Informe um número par"))
let divisao = numeroPar / 2
let restoDaDivisao = numeroPar % divisao

console.log("Seu número dividido por 2 é igual a", divisao, ",e sobra", restoDaDivisao)
//Nesse programa o resto de divisão = 0, porque todo número par dividido por 2 é uma divisão exata
//Se o usuário inserir um número ímpar, não teremos uma divisão exata, e resultará em resto de divisão = 1

/*
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console:    
    a) A idade do usuário em meses;    
    b) A idade do usuário em dias;    
    c) A idade do usuário em horas;
*/
let idadeAnos = Number(prompt("Quantos anos você tem?"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeDias * 24

console.log("Você tem", idadeMeses, "meses de idade")
console.log("Você tem", idadeDias, "dias de idade")
console.log("Você tem", idadeHoras, "horas de idade")

/*
Faça um programa que pergunte ao usuário dois números. 
Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo true ou false:
O primeiro número é maior que segundo? true
O primeiro número é igual ao segundo? false
O primeiro número é divisível pelo segundo? true
O segundo número é divisível pelo primeiro? true

obs: O true ou false vai depender dos números inseridos e do resultado das operações.
*/
let n1 = Number(prompt("Informe um número"))
let n2 = Number(prompt("Informe outro número"))
let maior = n1 > n2
let igual = n1 === n2
let divisao1 = n1 % n2 === 0
let divisao2 = n2 % n1 === 0

console.log("O primeiro número é maior que segundo?", maior)
console.log("O primeiro número é igual ao segundo?", igual)
console.log("O primeiro número é divisível pelo segundo?", divisao1)
console.log("O segundo número é divisível pelo primeiro?", divisao2)