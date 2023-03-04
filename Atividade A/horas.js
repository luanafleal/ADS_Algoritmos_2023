
/**
 * F01_q02:
 * Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
 */

import { question } from "readline-sync"

// entrada
const horas = Number(question("Horas: "))
const minutos = Number(question("Minutos: "))

// processamento 
const horaParaMinuto = horas * 60
const total = horaParaMinuto + minutos

// saída
console.log()
console.log(horas+"h e", minutos+"min equivalem a", total, "minutos.")
