
/**
 * F01_q24:
 * Leia um valor em m, calcule e escreva o equivalente em cm.
 */

import { question } from "readline-sync"

// entrada
const metros = Number(question("Metros: "))

// processamento 
const centimetros = metros * 100

// saída
console.log()
console.log(metros, "metros equivale a", centimetros, "centímetros.")
