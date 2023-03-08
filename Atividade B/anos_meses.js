
/**
 * F01_q29:
 * Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
 */

import { question } from "readline-sync"

// entrada
const meses = Number(question("Meses: "))

// processamento 
const anos = Math.floor(meses / 12)
const mesesFinal = meses % 12

// saída
console.log()
console.log(meses, "meses corresponde(m) a", anos, "ano(s) e", mesesFinal, "mês(s)")
