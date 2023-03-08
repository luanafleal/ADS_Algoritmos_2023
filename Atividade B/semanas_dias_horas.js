
/**
 * F01_q28:
 * Leia um número inteiro de horas, calcule e escreva quantas semanas,
 * quantos dias e quantas horas ele corresponde.
 */

import { question } from "readline-sync"

// entrada
const horas = Number(question("Horas: "))

// processamento 
const semanas = Math.floor(horas / 168)
const horasRestante = horas % 168
const dias = Math.floor(horasRestante / 24)
const horasFinal= horasRestante % 24

// saída
console.log()
console.log(horas, "horas corresponde(m) a", semanas, "semana(s),", dias, "dia(s) e", horasFinal, "hora(s)")
