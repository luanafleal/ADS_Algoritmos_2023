
/**
 * F01_q15:
 * Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
 */

import { question } from "readline-sync"

// entrada
const base = Number(question("Base: "))
const altura = Number(question("Altura: "))

// processamento 
const area = (base * altura) / 2

// saída
console.log()
console.log("Área do Triângulo =", area)
