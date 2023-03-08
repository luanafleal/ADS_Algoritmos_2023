
/**
 * F01_q39:
 * Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
 */

import { question } from "readline-sync"

// entrada
const a = Number(question('Primeiro numero: '))
const b = Number(question('Segundo numero: '))
const c = Number(question('Terceiro numero: '))

// Processamento
const r = (a + b)**2
const s = (b + c)**2
const d = (r + s) / 2

// Saída
console.log('Resultado = ', d)
