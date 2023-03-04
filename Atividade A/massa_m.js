
/**
 * F01_q23:
 * Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
 */

import { question } from "readline-sync"

// entrada
const quilos = Number(question("Valor em kg: "))

// processamento 
const gramas = quilos * 1000

// saída
console.log()
console.log(quilos+"kg", "equivalem a", gramas, "gramas")
