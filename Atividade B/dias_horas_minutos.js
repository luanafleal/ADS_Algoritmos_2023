
/**
 * F01_q30:
 * Leia um número inteiro de minutos, calcule e escreva
 * quantos dias, quantas horas e quantos minutos ele corresponde.
 */

import { question } from "readline-sync"

// entrada
const minutos = Number(question("Minutos: "))

// processamento 
const dias = Math.floor(minutos / 1440)
const minutoRestante = minutos % 1440
const horas = Math.floor(minutoRestante / 60)
const minutoFinal = minutoRestante % 60

// saída
console.log()
console.log(minutos, "minutos corresponde(m) a", dias, "dia(s),", horas, "hora(s) e", minutoFinal, "minutos.")
