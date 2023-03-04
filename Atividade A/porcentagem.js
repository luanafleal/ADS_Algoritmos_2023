
/**
 * F01_q13:
 * Leia um valor em real (R$), calcule e escreva 70% deste valor.
 */

import { question } from "readline-sync"

// entrada
const valor = Number(question("Valor(R$): "))

// processamento 
const porcentagem = (valor * 0.70)

// saída
console.log()
console.log("70% de R$", valor, "equivale a R$", porcentagem)
