
/**
 * F01_q19:
 * Leia o valor do raio de uma esfera, calcule e escreva seu volume.
 * (v = (4 * p * r3) / 3) (p = 3,14)
 */

import { question } from "readline-sync"

// entrada
const raio = Number(question("Raio da Esfera: "))

// processamento 
const volume = (4 * 3.14 * raio**3) / 3

// saída
console.log()
console.log("Volume da Esfera =", volume.toFixed(2))
