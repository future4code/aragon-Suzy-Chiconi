//Exercícios de interpretação de código
/*
1. Leia o código abaixo
    function minhaFuncao(variavel) {
        return variavel * 5
    }

    console.log(minhaFuncao(2))
    console.log(minhaFuncao(10))

    a) O que vai ser impresso no console?
    b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` 
    e `minhaFuncao(10)`? O que apareceria no console?

    RESPOSTAS:
    a) 10
       50
       //os valores passados, multiplicados por 5
    b) a função ficaria guardada, e não apareceria nada no console pq o return não imprime

2. Leia o código abaixo
    let textoDoUsuario = prompt("Insira um texto");

    const outraFuncao = function(texto) {
        return texto.toLowerCase().includes("cenoura")
    }

    const resposta = outraFuncao(textoDoUsuario)
    console.log(resposta)

    a. Explique o que essa função faz e qual é sua utilidade
    b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     I.   `Eu gosto de cenoura`
     II.  `CENOURA é bom pra vista`
     III. `Cenouras crescem na terra`

     RESPOSTAS:
     a. essa funçao retorna dentro de uma variável e imprime no console o texto digitado pelo usuário, 
        transcrito em letras maiúsculas, e verifica se no texto foi incluída a palavra "cenoura"
     b. I. true //existe a palavra "cenoura" no texto do usuário
        II. true //nesse texto, o usuário digitou CENOURA em maiúsculo, porém no return solicitamos que o texto
            ficase em caixa alta
        III. true //o includes busca caracteres, ou seja, palavras inteiras OU trechos

        ** pesquisei e pude observar que solicitando o ToLowerCase antes do includes, o método includes passa a
           não diferenciar maiúsculas de minúsculas 
           Exemplo: 
            'OLÁ MUNDO'.includes('mundo'); // false
            'OLÁ MUNDO'.toLowerCase().includes('mundo'); // true
        **
*/
//Exercícios de escrita de código
/*
1. Escreva as funções explicadas abaixo:    
    a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações 
       sobre você, como:
       "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
       Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a 
       função não possui entradas, apenas imprime essa mensagem.*/
       
        function sobreMim(){
            console.log("Eu sou a Suzy, tenho 47 anos, moro em São Paulo e sou desenvolverora I.")
        }
            
        sobreMim()

/*
    b) Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
       o nome (string), a idade (number), a cidade (string) e uma profissão (string). 
       Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com 
       o template:
       Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
       - Exemplo:  
        Para a entrada:  `"Laís"`, `23`, `"São Paulo"` e `"instrutora"`, 
        deve retornar: `"Eu sou Laís, tenho 23 anos, moro em Rua Guarapari 190 e sou instrutora."`
*/

        function dadosPessoais(nome, idade, cidade, profissao){
            return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
        }
         dadosPessoais("Suzy", 47, "São Paulo", "desenvolvedora I")

/*
2. Escreva as funções explicadas abaixo:    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das 
       duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
*/
        function recebeNumeros(numero1, numero2){
            const soma = numero1 + numero2
            return soma
        }
        console.log(recebeNumeros(10,20))

/*
    b) Faça uma função que receba 2 números e retorne um booleano que informa se o primeiro número 
       é **maior ou igual** ao segundo.
 */   
        function numbers(number1, number2){
            const numeros = number1 >= number2
            return numeros
        }
        numbers(10, 20)

/*
    c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
*/    
        function numero(numero){
            const verSeEPar = numero / 2 === 0
            return verSeEPar
        }
        numero(19)

/*
    d) Faça uma função que receba uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
       juntamente com uma versão dela em letras maiúsculas.
*/
        function mensagem(frase){
            let fraseMaiuscula = frase.toUpperCase()
            console.log(frase.length, fraseMaiuscula)
        }    
        mensagem("Boa tarde!")

/*
3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
   Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados 
   pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
        Números inseridos: 30 e 3
        Soma: 33
        Diferença: 27
        Multiplicação: 90
        Divisão: 10
*/
        const primeiroNumero = Number(prompt("Informe um número"))
        const segundoNumero = Number(prompt("Informe outro número"))

        function soma(primeiroNumero, segundoNumero){
            const resultadoSoma = primeiroNumero + segundoNumero
            return resultadoSoma
        }

        function subtracao(primeiroNumero, segundoNumero){
            const resultadoSubtracao = primeiroNumero - segundoNumero
            return resultadoSubtracao
        }

        function multiplicacao(primeiroNumero, segundoNumero){
            const resultadoMultiplicacao = primeiroNumero * segundoNumero
            return resultadoMultiplicacao
        }

        function divisao(primeiroNumero, segundoNumero){
            const resultadoDivisao = primeiroNumero / segundoNumero
            return resultadoDivisao
        }

        const numerosInseridos = `${primeiroNumero} e ${segundoNumero}`
              
        console.log(`Números inseridos: ${numerosInseridos}`)
        console.log(`Soma: ${soma(primeiroNumero, segundoNumero)}`)
        console.log(`Diferença: ${subtracao(primeiroNumero, segundoNumero)}`)
        console.log(`Multiplicação: ${multiplicacao(primeiroNumero, segundoNumero)}`)
        console.log(`Divisão: ${divisao(primeiroNumero, segundoNumero)}`)