
/**
 * F01_q08:
 * Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
 */

import { question } from "readline-sync"

// entrada
const num1 = Number(question("Primeiro número: "))
const num2 = Number(question("Segundo número: "))


// processamento 
const divisao = (num1 + num2) / (num1 - num2)

// saída
console.log()
console.log("A divisão da soma pela subtração dos números é: ")
console.log("("+num1, "+", num2+") ÷ ("+num1, "-", num2+") = ", divisao)

