
/**
 * F01_q10:
 * Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
 */

import { question } from "readline-sync"

// entrada
const num1 = Number(question("Primeiro número: "))
const num2 = Number(question("Segundo número: "))

// processamento 
const quociente = num1 / num2
const resto = num1 % num2

// saída
console.log()
console.log("Quociente: ", quociente)
console.log("Resto da Divisão: ", resto)
