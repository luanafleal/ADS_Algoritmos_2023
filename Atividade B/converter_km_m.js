
/**
 * F01_q25:
 * Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.
 */

import { question } from "readline-sync"

// entrada
const metros = Number(question("Metros: "))

// processamento 
const quilometros = Math.floor(metros / 1000)
const metrosRestante = metros % 1000

// saída
console.log()
console.log(metros, "metros corresponde a", quilometros, "km e", metrosRestante, "m")
