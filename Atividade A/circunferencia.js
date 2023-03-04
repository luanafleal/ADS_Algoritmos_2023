
/**
 * F01_q18:
 * Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.
 * (c = 2 * p * r)
 */

import { question } from "readline-sync"

// entrada
const raio = Number(question("Raio da Circunferencia: "))

// processamento 
const comprimento = 2 * 3.14 * raio

// saída
console.log()
console.log("Comprimento da Circunferência =", comprimento.toFixed(2))
