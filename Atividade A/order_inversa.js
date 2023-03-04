
/**
 * F01_q09:
 * Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
 */

import { question } from "readline-sync"

// entrada
const A = Number(question("Primeiro número: "))
const B = Number(question("Segundo número: "))

// saída
console.log()
console.log("("+B, ",", A+")")
