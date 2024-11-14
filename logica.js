// 1. Crie um programa que pergunte ao usuário um número de 1 a 3 e exiba o nome correspondente ao número (1: "um", 2: "dois", 3: "três").

//  var nome = prompt(' Escolha um número de 1 a 3')
// if (nome == 1){
//     console.log('N° um')
// }
// else if (nome == 2){
//     console.log('N° dois')
// }
// else if ( nome == 3){
//     console.log('N° três')
// }
// else{
//     console.log('Número inválido')
// }

// 2. Escreva um programa que peça ao usuário para inserir um número e verifique se o número é maior que 10.

// let numero = prompt('Insira um número')
// if( numero < 10){
//     console.log('Menor que 10')
// }
// else if (numero == 10){
//     console.log('Igual a 10')
// }
// else{
//     console.log('Maior que 10 ')
// }


// 3. Desenvolva um programa que pergunte ao usuário o dia da semana (número de 1 a 7) e exiba o nome do dia correspondente.

// const dias = parseInt(prompt('Escolha um dia da semana, onde 1 é domingo, 2 segunda e 7 sábado'))
//     switch (dias){
//         case 1 :
//             console.log('Domingo')
//             break
//         case 2 :
//             console.log('Segunda-feira')
//             break
//         case 3 :
//             console.log('Terça-feira')
//             break
//         case 4 :
//             console.log('Quarta-feira')
//             break
//         case 5 :
//             console.log('Quinta-feira')
//             break
//         case 6 :
//             console.log('Sexta-feira')
//             break
//         case 7 :
//             console.log('Sabado')
//             break
//         default : 
//         console.log('Dia inválido')
//     }

// 4. Crie um algoritmo que solicite ao usuário uma cor (vermelho, verde, azul) e exiba uma mensagem correspondente à cor escolhida.

// nomes = [ 'azul ' , 'vermelho ' , 'amarelo ' , 'laranja  ' , 'verde ','roxo']
// const cores = prompt('Escolha uma cor '+ nomes)

// if( cores == 'azul'){
//     console.log('O azul é a cor do sonho, cor do céu, cor do mar.')
// }
// else if( cores == 'vermelho'){
//     console.log('O vermelho é uma cor quente que remete ao poder, à guerra à paixão.')
// }
// else if( cores == 'amarelo'){
//     console.log('O amarelo é a cor da luz, do sol, do girassol. Estimula o raciocínio.')
// }
// else if( cores == 'laranja'){
//     console.log('O laranja vem da alagria, criatividade, bom humor e da festa.')
// }
// else if( cores == 'verde'){
//     console.log('O verde lembra a natureza, o mundo, a paz, a saúde. Transmite a calma e tranquilidade.')
// }
// else if( cores == 'roxo'){
//     console.log('O roxo vem do único, da delicadeza e sensibilidade. Mágico e espiritual, fantasioso e luxo.')
// }

// 5. Faça um programa que solicite ao usuário dois números e verifique se ambos são pares.

//=================FUNÇAO================
// function ePar(num) { return num % 2 === 0; }

// const num1 = parseInt(prompt("Digite o primeiro número:"));
// const num2 = parseInt(prompt("Digite o segundo número:"));
// if (ePar(num1) && ePar(num2)) {
//     console.log("Ambos os números são pares.");
// }
// else 
// { console.log("Nem ambos os números são pares.");}

// 6. Desenvolva um programa que pergunte ao usuário uma operação matemática (+, -, *, /) e dois números, e realize a operação escolhida.

// let op = prompt('Escolha umas das operações matemática (+, -, *, /) ')
// let num = parseInt(prompt('Agora escolha o primeiro número'))
// let numb = parseInt(prompt('Agora escolha o segundo número'))

// switch (op){
//     case '+' :
//         console.log(num + numb)
//         break
//     case '-' :
//         console.log(num - numb)
//         break
//     case '/' :
//         console.log(num / numb)
//         break
//     case '*' :
//         console.log(num * numb)
//         break
//     default: 
//     console.log('Digite algum dos caracteres (+, -, *, /)')
// }

// 7. Escreva um programa que peça ao usuário uma nota de 0 a 10 e classifique a nota como "Baixa", "Média" ou "Alta" usando estrutura condicional if (ate 4.9 baixa, 5 a 6.9 media).

// var nota_atividade = parseInt(prompt('De 0 à 10, qual foi a sua nota?'))

// if (nota_atividade <= 4.9){
//     console.log('Sua nota foi baixa. Melhore!')
// }
// else if(nota_atividade <= 6.9){
//     console.log('Sua nota foi média. Esforce-se mais')
// }
// else{
//     console.log('Parabéns. A sua nota foi alta. Continue com sua dedicação')
// }


// 8. Desenvolva um algoritmo que pergunte ao usuário o estado civil (solteiro, casado, divorciado, viúvo) e exiba uma mensagem correspondente, "você é : ".

// const estado_civil = prompt('Qual o seu estado civil? (Solteiro, casado, viuvo ou divorciado)')
// switch(estado_civil){
//     case 'solteiro':
//         console.log('Você é : '+ estado_civil)
//         break
//     case 'casado':
//         console.log('Você é : '+ estado_civil)
//         break
//     case 'viuvo':
//         console.log('Você é : '+ estado_civil)
//         break
//     case 'divorciado':
//         console.log('Você é : '+ estado_civil)
//         break
//     default: 
//         console.log('Estado civil inválido')
// }



// 9. Crie um algoritmo que verifique se um número inserido pelo usuário é par ou ímpar.

// function verificaParImpar() {
//     const numero1 = parseInt(prompt('informe o número: '))
//     if (numero1 % 2 == 1) {
//         console.log('seu numero é impar')
//     }
//     else {
//         console.log('seu numero é par')
//     }

// }
// function numeroUmTres() {
//     var nome = prompt(' Escolha um número de 1 a 3')
//     if (nome == 1) {
//         console.log('N° um')
//     }
//     else if (nome == 2) {
//         console.log('N° dois')
//     }
//     else if (nome == 3) {
//         console.log('N° três')
//     }
//     else {
//         console.log('Número inválido')
//     }
// }

// const questao = parseInt(prompt('Informe a questão desejada'))

// if (questao === 1){
//     numeroUmTres()
// }else if(questao === 9){
//     verificaParImpar()
// }
// else{
//     console.log('Questão inválida')
// }
// 10. Crie um algoritmo que solicite ao usuário uma idade e verifique se ela é maior ou igual a 18.

// var idade = parseInt(prompt('Qual a sua idade?'))
// if(idade >= 18){
//     console.log('Você é maior de idade')
// }
// else {
//     console.log('Você é menor de idade')
// }