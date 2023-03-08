
/**
 * F01_q38:
 * Leia 2 (duas) frações (numerador e denominador), calcule e escreva a
 * soma destas frações, escrevendo o resultado em forma de fração.
 */

import { question } from "readline-sync"

// entrada
const numerador1 = Number(question("Numerador 1: "))
const denominador1 = Number(question("Denominador 1: "))
const numerador2 = Number(question("Numerador 2: "))
const denominador2 = Number(question("Denominador 2: "))

// Processamento
const denominador = denominador1 * denominador2
const numerador = ((denominador/denominador1) * numerador1) + ((denominador/denominador2) * numerador2)

// Saída
console.log("Soma = ", numerador+"/"+denominador)
