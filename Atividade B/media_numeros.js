
/**
 * F01_q34:
 * Leia 3 números, calcule e escreva a média dos números.
 */

import { question } from "readline-sync"

// entrada
const num1 = Number(question("Digite o primeiro numero: "))
const num2 = Number(question("Digite o segundo numero: "))
const num3 = Number(question("Digite o terceiro numero: "))

// processamento 
const media = (num1 + num2 + num3) / 3

// saída
console.log()
console.log("Média =", media.toFixed(2))
