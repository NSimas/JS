let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a altura do retângulo (use ponto): ", (altura) => {
    rl.question("Digite o comprimento do retângulo (use ponto): ", (comprimento) => {
        let area = parseFloat(altura) * parseFloat(comprimento);
        console.log(`A área do retângulo é: ${area}`);
        //aqui fecha o rl pra não ficar rodando infinito
        rl.close();
    });
});