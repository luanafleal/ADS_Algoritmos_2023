
/**
 * F01_q01:
 * Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
 */

import { question } from "readline-sync"

// entrada
const velocidade = Number(question("Velocidade(m/s): "))

// processamento 
const velocidadeKm = velocidade * 3.6

// saída
console.log()
console.log(velocidade, "m/s equivale a", velocidadeKm.toFixed(1), "km/h")
