/*
Exercícios de interpretação de código

Exercício 1
10
10 5

Exercício 2
10 10 10

Exercício 3
let horasTrabalhadasDiariamente = prompt("Quantas horas você trabalha por dia?")
let valorRecebidoDiariamente = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorRecebidoDiariamente/horasTrabalhadasDiariamente} por hora`)
*/

/*
Exercícios de escrita de código

1. Construa um programa, seguindo os seguintes passos:
    
    a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
    b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
    c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
    d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
    e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    */
       const nome = prompt ("Qual é o seu nome?")
       let idade = prompt ("Qual é a sua idade?")

       //o tipo das variáveis não retornou antes, devido não haver atribuído nenhum valor a elas     

       console.log(typeof nome) //string 
       console.log(typeof idade) //string
       //o prompt retorna sempre qualquer valor, seja número ou texto, como string

       console.log ("Meu nome é", nome, "e tenho", idade, "anos")

/*
2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
   Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    
    a) Crie três novas variáveis, contendo as respostas
    
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    
    Você está usando uma roupa azul hoje? - SIM
*/
      const corDoCeu = prompt ("O céu é azul?")
      const saborDoce = prompt ("O mel é amargo?")
      const mar = prompt ("A água do mar é salgada?")

      console.log("O céu é azul? -", ceuAzul)
      console.log("O mel é amargo? -", doceMel)
      console.log("A água do mar é salgada? -", aguaDoMar)

/*
3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial
    let a = 10
    let b = 25
       
   Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` 
   e `b` passe a ter o valor de `a`. 
   Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
   Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, 
   independente de qual valor essas variáveis assumam inicialmente 
   (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem, a lógica 
    do seu programa teria que mudar também). 
*/

      let a = 10
      let b = 25
      
      console.log("a=", a)
      console.log("b=", b)
      
      // Aqui faremos uma lógica para trocar os valores

      let c = a
      a = b
      b = c
      
      // Depois de trocados, teremos o seguinte resultado:
     
      console.log("O novo valor de a é", a) // O novo valor de a é 25
      console.log("O novo valor de b é", b) // O novo valor de b é 10

      
      


