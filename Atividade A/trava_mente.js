
/**
 * F01_q07:
 * Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
 */

import { question } from "readline-sync"

// entrada
const num1 = Number(question("Primeiro número: "))
const num2 = Number(question("Segundo número: "))
const num3 = Number(question("Terceiro número: "))


// processamento 
const soma = num1 + num2
const diferenca = num2 - num3

// saída
console.log()
console.log("A soma entre o primeiro número e o segundo é: ", soma)
console.log("A diferença entre o segundo número e o terceiro é: ", diferenca)
