
/**
 * F01_q06:
 * Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
 */

import { question } from "readline-sync"

// entrada
const velocidade = Number(question("Velocidade(km/h): "))

// processamento 
const velocidadeMs = velocidade / 3.6

// saída
console.log()
console.log(velocidade, "km/h equivale a", velocidadeMs.toFixed(1), "m/s")
