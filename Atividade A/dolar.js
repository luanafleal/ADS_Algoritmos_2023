
/**
 * F01_q04:
 * Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
 */

import { question } from "readline-sync"

// entrada
const dolar = Number(question("Valor do dolar hoje(R$): "))
const quantia = Number(question("Valor em Dolar($): "))

// processamento 
const dolarParaReal = dolar * quantia

// saída
console.log()
console.log(quantia, "dolares equivalem a", dolarParaReal, "reais.")
