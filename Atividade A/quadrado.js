
/**
 * F01_q16:
 * Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2).
 */

import { question } from "readline-sync"

// entrada
const lado = Number(question("Lado do Quadrado: "))

// processamento 
const area = lado * lado

// saída
console.log()
console.log("Área do Quadrado =", area)
