
/**
 * F01_q27:
 * Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
 * segundos ele corresponde.
 */

import { question } from "readline-sync"

// entrada
const segundos = Number(question("Segundos: "))

// processamento 
const horas = Math.floor(segundos / 3600)
const segundoRestante= segundos % 3600 
const minutos = Math.floor(segundoRestante / 60) 
const segundoFinal = segundoRestante % 60 

// saídas
console.log()
console.log("O tempo corresponde a", horas, "hora(s),", minutos, "minuto(s) e", segundoFinal, "segundo(s).")
