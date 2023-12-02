//Algoritmo que lê três números inteiros e mostra o maior deles

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Informe o primeiro numero: ', (num1) => {
    rl.question('Informw o segundo numero: ', (num2) => {
        rl.question('Informe o terceiro numero: ', (num3) => {

            const numero1 = parseFloat(num1) 
            const numero2 = parseFloat(num2)
            const numero3 = parseFloat(num3)

            if (numero1 > numero2 && numero1 > numero3) {
                console.log('O maior numero é ', numero1)
            } else {
                if(numero2 > numero1 && numero2 > numero3) {
                    console.log('O maior numero é: ', numero2)
                } else {
                    if(numero3 > numero2 && numero3 > numero1) {
                        console.log('O maior numero é: ', numero3)
                    }
                }
            }

            rl.close()
            
        })
    })
}) 