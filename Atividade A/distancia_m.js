
/**
 * F01_q22:
 * Leia um valor em km, calcule e escreva o equivalente em m.
 */

import { question } from "readline-sync"

// entrada
const quilometro = Number(question("Valor em quilometros: "))

// processamento 
const metros = quilometro * 1000

// saída
console.log()
console.log(quilometro+"km", "equivalem a", metros, "metros")
