
/**
 * F01_q26:
 * Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
 */

import { question } from "readline-sync"

// entrada
const dias = Number(question("Digite a quantidade de dias: "))

// processamento 
const semanas = Math.floor(dias / 7)
const diasRestante = dias % 7

// saída
console.log()
console.log(dias, "dias corresponde(m) a", semanas, "semana(s) e", diasRestante, "dia(s)")
