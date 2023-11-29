const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Sou a calculadora de média e vou calcular a média do aluno =D");

let numero1, numero2, numero3, numero4, media;

rl.question("Digite a nota da primeira unidade: ", (input1) => {
    numero1 = parseFloat(input1);
    if (isNaN(numero1)) {
        console.log("Por favor, digite um número válido para a primeira unidade.");
        rl.close();
        return;
    }

    rl.question("Digite a nota da segunda unidade: ", (input2) => {
        numero2 = parseFloat(input2);
        if (isNaN(numero2)) {
            console.log("Por favor, digite um número válido para a segunda unidade.");
            rl.close();
            return;
        }

        rl.question("Digite a nota da terceira unidade: ", (input3) => {
            numero3 = parseFloat(input3);
            if (isNaN(numero3)) {
                console.log("Por favor, digite um número válido para a terceira unidade.");
                rl.close();
                return;
            }

            rl.question("Digite a nota da quarta unidade: ", (input4) => {
                numero4 = parseFloat(input4);
                if (isNaN(numero4)) {
                    console.log("Por favor, digite um número válido para a quarta unidade.");
                    rl.close();
                    return;
                }

                media = (numero1 + numero2 + numero3 + numero4) / 4;
                if (media >= 7) {
                    console.log(`A média deste aluno é: ${media}, ele foi aprovado!`);
                } else {
                    console.log(`A média deste aluno é: ${media}, ele foi reprovado!`);
                }
                rl.close();
            });
        });
    });
});
