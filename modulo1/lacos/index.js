// Exercícios de interpretação de código
/*
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
        let valor = 0
        for(let i = 0; i < 5; i++) {
        valor += i
        }
        console.log(valor)

RESPOSTA: Somando à variável 'valor', o valor que for armazenado a cada loop na variável 'i'. O resultado 
          impresso no console ao final será 10.


2. Leia o código abaixo:
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
        if (numero > 18) {
                console.log(numero)
            }
        }

a) O que vai ser impresso no console?
b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? 
   Se sim, o que poderia ser usado para fazer isso?

RESPOSTAS:
a) Os números maiores que 18
b) O `for...of...` faz a leitura dos elementos do array e nos permite acessar o índice utilizando o 
   método indexOf()
   
        const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
        for (let numero of lista) {
        if (numero > 18) {
                console.log(lista.indexOf(numero))
            }
        }


3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4?
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
        let quantidadeAtual = 0
        while(quantidadeAtual < quantidadeTotal){
        let linha = ""
        for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
            linha += "*"
        }
        console.log(linha)
        quantidadeAtual++
        }

RESPOSTA: 
          *
          **
          ***
          ****
*/

// Exercícios de escrita de código
/*
1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável.     
    a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"    
    b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, 
       e guarde esses nomes em um array
*/
let quantidadeBichosEstimacao = Number(prompt("Quantos bichos de estimação você tem?"))
let nomesDosPets = []

if(quantidadeBichosEstimacao == 0){
    console.log("Que pena! Você pode adotar um pet")
} else if (quantidadeBichosEstimacao > 0) {
    for(let i=0; i < quantidadeBichosEstimacao; i++){
        let recebeNomes = (prompt("Digite os nomes dos seus pets - um a um"))
        nomesDosPets.push(recebeNomes)
    }
    console.log(nomesDosPets)
}

/*
2. Considere que você tenha acesso a um `array` (chamado de 'array original') que é composto somente 
   de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, 
   realizando as operações pedidas:
    
    a) Escreva um programa que **imprime** cada um dos valores do array original.    
    b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10    
    c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e 
       **imprima** esse novo array    
    d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: 
       "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.    
    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
*/

//RESPOSTAS:
//a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i=0; i < arrayOriginal.length; i++){
    const elementos = arrayOriginal[i]
    console.log(elementos)
}

//b)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i=0; i < arrayOriginal.length; i++){
    const elementos = arrayOriginal[i]
    console.log(elementos / 10)
}

//c)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
const numerosPares = []

for (let i=0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] % 2 == 0){
        numerosPares.push(arrayOriginal[i])
    }
 }
 console.log(numerosPares)

//d
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const descricaoArray = ""

// for (let i=0; i < arrayOriginal.length; i++){
//     if (arrayOriginal[i] > 0){
//         let textoArray = `O elemento do índex ${i} é: ${[i]}`
//         textoArray.push(arrayOriginal[i])
        
//         console.log(descricaoArray)
//     }
//  }
//-------------------NÃO CONSEGUI DESENVOLVER-------------------------------

//e)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

function devolveMaiorEMenor(array){
    let maiorNumero = 0
    let menorNumero = 0

    for (let = 0; i < array.length; i++) {
        let numeroAtual = array[i]
        if (numeroAtual >= maiorNumero && numeroAtual <= menorNumero){
            maiorNumero = numeroAtual && menorNumero = numeroAtual
        }
    }
    console.log(`O maior número é ${maiorNumero} e o menor é ${menorNumero}`)
}
devolveMaiorEMenor(array)
//-------------------NÃO CONSEGUI DESENVOLVER-------------------------------


