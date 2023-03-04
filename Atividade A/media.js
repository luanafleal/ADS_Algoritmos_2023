
/**
 * F01_q14:
 * Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.
 */

import { question } from "readline-sync"

// entrada
const nota1 = Number(question("Primeira nota: "))
const peso1 = Number(question("Peso: "))
const nota2 = Number(question("Segunda nota: "))
const peso2 = Number(question("Peso: "))
const nota3 = Number(question("Terceira nota: "))
const peso3 = Number(question("Peso: "))

// processamento 
const mediaponderada = (peso1*nota1) + (peso2*nota2) + (peso3*nota3) / (peso1+peso2+peso3)

// saída
console.log()
console.log("Média:", mediaponderada)
