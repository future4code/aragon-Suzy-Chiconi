// Exercícios de interpretação de código
/*
1. Leia o código abaixo:

        const respostaDoUsuario = prompt("Digite o número que você quer testar")
        const numero = Number(respostaDoUsuario)

        if (numero % 2 === 0) {
        console.log("Passou no teste.")
        } else {
        console.log("Não passou no teste.")
        }

a) Explique o que o código faz. Qual o teste que ele realiza? 
b) Para que tipos de números ele imprime no console "Passou no teste"? 
c) Para que tipos de números a mensagem é "Não passou no teste"?

RESPOSTAS:
a) O código testa se o número recebido no prompt é divisível por 2, checando se tem resto de divisão
b) Para os números pares
c) Para os números ímpares

2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas 
   de um supermercado:

        let fruta = prompt("Escolha uma fruta")
        let preco
        switch (fruta) {
        case "Laranja":
            preco = 3.5
            break;
        case "Maçã":
            preco = 2.25
            break;
        case "Uva":
            preco = 0.30
            break;
        case "Pêra":
            preco = 5.5
            break; // BREAK PARA O ITEM c.
        default:
            preco = 5
            break;
        }
        console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Para que serve o código acima?
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa 
   no console se retirássemos o `break` que está logo acima do `default` 
   (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

RESPOSTAS:
a) O código serve para informar o preço da fruta escolhida pelo usuário
b) 2.25
c) A mensagem exibida seria: "O preço da fruta Pêra é R$ 5" - pq retirando o break, 
   o JS continuaria lendo o código e retornaria o valor abaixo

3. Leia o código abaixo:

        const numero = Number(prompt("Digite o primeiro número."))

        if(numero > 0) {
        console.log("Esse número passou no teste")
        let mensagem = "Essa mensagem é secreta!!!"
        }

        console.log(mensagem)

a) O que a primeira linha está fazendo?
b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

RESPOSTAS:
a) Solicitando ao usuário um número, e convertendo a string recebida no prompt em número
b) Independente do número digitado pelo usuário, não será retornada uma mensagem, pq a variável mensagem
   foi declarada, mas não foi definida
c) Sim, retornará erro, pq ao solicitar o console.log, foi passado como parâmetro a variável mensagem,
   foi declarada e não definida dentro do bloco if. Para a impressão correta, o parâmetro para o console.log
   deveria ser numero, a variável declarada no escopo global e testada pelo bloco if
*/

// Exercícios de escrita de código
/*
1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela 
   pode dirigir (apenas maiores de idade).
    
    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.    
    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.    
    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, 
       imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/
const requisitoParaCNH = Number(prompt("Informe a sua idade"))

if (requisitoParaCNH >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

/*
2. Agora faça um programa que verifica que turno do dia um aluno estuda. 
   Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
   Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else
*/
const turnoDeEstudo = prompt('Em qual turno você estuda? (digite M, V, ou N - "Matutino, Vespertino ou Noturno")')
if (turnoDeEstudo === "M" || turnoDeEstudo === "m") {
    console.log("Bom Dia!")
} else if (turnoDeEstudo === "V" || turnoDeEstudo === "v") {
    console.log("Boa Tarde!") 
} else if (turnoDeEstudo === "N" || turnoDeEstudo === "n") {
     console.log("Boa Noite!") 
} else {console.log("Alternativa não identificada! Tente novamente")}

/*
3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
*/
const turnoDeEstudo = prompt('Em qual turno você estuda? (digite M, V, ou N - "Matutino, Vespertino ou Noturno")')

switch (turnoDeEstudo) {
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite")
        break
    default:
        console.log("Alternativa não identificada! Tente novamente")
        break
}

/*
4. Considere a situação: 
   você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você 
   se ele for do gênero fantasia **e** se o ingresso está abaixo de 15 reais. 
   Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta 
   sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
   Caso positivo, imprima no console a mensagem: `"Bom filme!"`, 
   caso contrário, imprima `"Escolha outro filme"
*/
const generoFilme = prompt("Que gênero de filme você quer assistir?")
const valorIngresso = Number(prompt("Qual o valor máximo que você pretende gastar?"))

     if (generoFilme === "fantasia" && valorIngresso <= 15) {
         console.log("Bom filme!")
     } else {
         console.log("Escolha outro filme!")
     }

// =============== Desafios ===============
/*
1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
   pergunte ao usuário, pelo prompt, qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima
   no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o 
   usuário colocou no input.
*/
const generoFilme = prompt("Que gênero de filme você quer assistir?")
const valorIngresso = Number(prompt("Qual o valor máximo que você pretende gastar?"))

     if (generoFilme === "fantasia" && valorIngresso <= 15) {
         const lanche = prompt("Qual lanche você quer comprar?")
         console.log("Bom filme!")
         console.log(`Aproveite e se delicie comendo ${lanche}!`)
     } else {
         console.log("Escolha outro filme!")
     }

/*
2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
   Para esta compra, o usuário deve fornecer algumas informações:
    - Nome completo;
    - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    - Categoria: pode ser as opções 1, 2, 3 ou 4;
    - Quantidade de ingressos
    
    O seu sistema deve solicitar estas informações ao usuário, através do `prompt`. 
    Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total 
    que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
    Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
    Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser 
    multiplicados pelo valor do dólar (considerar o dólar = R$4,10)

                Exemplo de saída: Jogo Nacional
                ---Dados da compra--- 
            Nome do cliente:  Soter Padua 
            Tipo do jogo:  Nacional 
            Etapa do jogo:  Final 
            Categoria:  1 
            Quantidade de Ingressos:  10 ingressos 
            ---Valores--- 
            Valor do ingresso:  R$ 1980
            Valor total:  R$ 19800

                Exemplo de saída: Jogo Internacional
                ---Dados da compra--- 
            Nome do cliente:  Soter Padua 
            Tipo do jogo:  Internacional 
            Etapa do jogo:  Final 
            Categoria:  1 
            Quantidade de Ingressos:  10 ingressos 
            ---Valores--- 
            Valor do ingresso:  U$ 482.92682926829275
            Valor total:  U$ 4829.2682926829275
*/
const nome = prompt("Informe seu nome completo")
const tipoDeJogo = prompt("Informe o tipo de jogo: IN ou DO")
const etapaDoJogo = prompt("Informe a etapa do Jogo: SF, DT ou FI")
const categoria = prompt("Informe a categora: 1, 2, 3 ou 4")
const quantidadeDeIngressos = prompt("Informe a quantidade de ingressos")

function vendaDeIngressos(nome, tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos){
    switch(vendaDeIngressos = nome, tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos){
        case nome, tipoDeJogo, etapaDoJogo, categoria, quantidadeDeIngressos:
    console.log("---Dados da compra---")
    break
        default:
        console.log("Opção inválida! Tente novamente.")
        break
    }
}    
 
// NÃO CONSEGUI FINALIZAR O DESAFIO 2    