
/**
 * F01_q17:
 * Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)
 */

import { question } from "readline-sync"

// entrada
const base = Number(question("Base: "))
const altura = Number(question("Altura: "))

// processamento 
const area = base * altura

// saída
console.log()
console.log("Área do Retângulo =", area)
