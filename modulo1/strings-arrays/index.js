//Exercícios de interpretação de código
/*
1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log('f. ', valor)

    RESPOSTAS:
    a.  undefined //NÃO FOI ATRIBUÍDO NENHUM VALOR PARA A let array
    b.  null //FOI ATRIBUÍDO O VALOR null PARA array
    c.  11 //array.length NOS MOSTRA QUE TEMOS 11 ITENS NESSA LISTA
    d.  3 //O ÍNDICE (i) DE UM ARRAY COMEÇA COM 0. SE let i=0, NA NOSSA LISTA (array[i]), O Nº 3 ESTÁ NA POSIÇÃO 0
    e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] //SUBSTITUÍMOS O Nº QUE ESTAVA NA POSIÇÃO i+1. SE i=3, O Nº AO LADO (4) FOI SUBSTITUÍDO POR 19
    f.  9 //A LISTA (array) ESTÁ ARMAZENADA DENTRO DA VARIÁVEL (const valor), QUE PEDE O VALOR DA POSIÇÃO i+6 DENTRO DA array.

2. Leia o código abaixo com atenção
    const frase = prompt("Digite uma frase")
    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

    RESPOSTA:
    SUBI NUM ÔNIBUS EM MIRROCOS 27 //toUpperCase() TRANSFORMA EM MAIÚSCULO, replaceAll("A", "I") SUBSTITUI "A" POR "I", E O frase.length CONTA QUANTOS CARACTERES TEMOS NA FRASE
*/

//Exercícios de escrita de código
/*
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
   Em seguida, Imprima no console a seguinte mensagem:    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
*/
let nome = prompt("Qual é o seu nome?")
let eMail = prompt("Informe o seu e-mail")
let frase1 = "O e-mail " + eMail + " foi cadastrado com sucesso. Seja bem-vinda(o), " + nome + "."
let frase2 = `O e-mail ${eMail} foi cadastrado com sucesso. Seja bem-vinda(o) ${nome}.`
console.log(frase1)
console.log(frase2)

/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. 
   Em seguida, siga os passos:
    
    a) Imprima no console o array completo    
    b) Imprima no console a mensagem:
       "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, 
       **uma embaixo da outra**.    
    c) Aqui vai um desafio: 
       pergunte ao usuário uma comida preferida. 
       Troque a segunda comida da sua lista pela inserida pelo usuário. 
       Imprima no consolea nova lista
*/
let comidas = comidasPreferidas = ["lasanha", "churrasco", "batata", "pizza", "salada"]
console.log(comidasPreferidas) 
console.log("Essas são as minhas comidas preferidas:")
console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

let comidaUsuario = prompt("Qual é a sua comida preferida")
comidasPreferidas = ["lasanha", comidaUsuario, "batata", "pizza", "salada"] //desafio
console.log("Lista substituída") //desafio
console.log(comidasPreferidas) //desafio

/*
3. Faça um programa, seguindo os passos:    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array    
    c) Imprima o array no console    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2     
    e) Remova da lista o item de índice que o usuário escolheu.    
    f) Imprima o array no console
*/
let listaDeTarefas = []
let tarefa1 = prompt("Informe a primeira tarefa que você precisa realizar hoje")
let tarefa2 = prompt("Informe a segunda tarefa que você precisa realizar hoje")
let tarefa3 = prompt("Informe a terceira tarefa que você precisa realizar hoje")
let adicionandoTarefa1 = listaDeTarefas.push(tarefa1)
let adicionandoTarefa2 = listaDeTarefas.push(tarefa2)
let adicionandoTarefa3 = listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)

let indice = Number(prompt("Digite um número entre 0 e 2 - representa no índice a tarefa que você já realizou"))
console.log(indice)
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)