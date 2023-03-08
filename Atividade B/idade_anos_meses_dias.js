
/**
 * F01_q37:
 * Leia a idade de uma pessoa expressa em dias e
 * escreva-a expressa em anos, meses e dias.
 */

import { question } from "readline-sync"

// entrada
const dias = Number(question("Sua idade em dias: "))

// processamento
const anos = Math.floor(dias / 365) 
const resto1 = dias % 365
const meses = Math.floor(resto1 / 30)
const diasRestante = resto1 % 30

// saída
console.log()
console.log("Idade:", anos, "anos, ", meses, "meses e", diasRestante, "dias.")
