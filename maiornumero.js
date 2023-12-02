//Algoritmo que lê três números inteiros e mostra o maior deles

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Informe o primeiro número: ', (num1) => {
    rl.question('Informe o segundo número: ', (num2) => {
        rl.question('Informe o terceiro número: ', (num3) => {

            const numero1 = parseFloat(num1)
            const numero2 = parseFloat(num2)
            const numero3 = parseFloat(num3)

            if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(num3)) {

                if (numero1 > numero2 && numero1 > numero3) {
                    console.log('O maior numero é:', numero1)
                } else {
                    if (numero2 > numero1 && numero2 > numero3) {
                        console.log('O maior numero é:', numero2)
                    } else {
                        if (numero3 > numero2 && numero3 > numero1) {
                            console.log('O maior numero é:', numero3)
                        }
                    }
                }

            } else {
                console.log('Digite somente números!')
            }

            rl.close()

        })
    })
}) 