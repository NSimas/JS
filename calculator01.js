//the original one: https://github.com/NSimas/C-Sharp/blob/main/Calculadoras0002/Program.cs

const { parse } = require('path');
let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("Sou a calculadora de soma e vou somar os números =D");

let numero1;

rl.question("Digite um número a ser somado: ", (input) => {
    numero1 = parseFloat(input);

    function somar() {
        rl.question("Digite outro número a ser somado: ", (input) => {
            let numero2 = parseFloat(input);
            let total = numero1 + numero2;
            console.log(`O total da soma até aqui é: ${total}`);
            console.log("Quer sair da soma?");

            rl.question("Escolha uma opção: ", (opcao) => {
                switch (parseInt(opcao)) {
                    case 1:
                        console.log("Saindo da soma...");
                        rl.close();
                        break;
                    case 2:
                        numero1 = total;
                        somar(); 
                        break;
                    default:
                        console.log("Opção inválida, voltaremos para a soma...");
                        numero1 = total;
                        somar(); 
                        break;
                }
            });
            
    });
    }
    somar();
});