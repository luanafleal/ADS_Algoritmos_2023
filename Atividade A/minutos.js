
/**
 * F01_q03:
 * Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
 */

import { question } from "readline-sync"

// entrada
const minutos = Number(question("Minutos: "))

// processamento 
const horas = Math.floor(minutos / 60)
const minutosRestantes = minutos%60

// saída
console.log()
console.log(minutos, "minutos equivalem a", horas+"h e", minutosRestantes+"min")
