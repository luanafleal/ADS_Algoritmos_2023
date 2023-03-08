
/**
 * F01_q31:
 * Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.
 */

import { question } from "readline-sync"

// entrada
const binario = Number(question("Numero Binario(4 digitos): "))

// processamento 
const posicao3 = Math.floor(binario / 1000)
const resto3 = binario % 1000
const posicao2 = Math.floor(resto3 / 100)
const resto2 = resto3 % 100
const posicao1 = Math.floor(resto2 / 10)
const posicao0 = resto2 % 10

const calculo = (posicao0 * 2**0 + posicao1 * 2**1 + posicao2 * 2**2 + posicao3 * 2**3)

// saída
console.log()
console.log ("O número binário equivale a", calculo, "na base decimal.")
