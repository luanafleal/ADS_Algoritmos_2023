
/**
 * F01_q40:
 * Calcule a quantidade de dinheiro gasta por um fumante
 * Dados de entrada: o número de anos que ele fuma, o no de
 * cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).
 */

import { question } from "readline-sync"

// entrada
const anos = Number(question("Anos de vicio: "))
const cigarros = Number(question("Quantidade de cigarros por dia: "))
const preco = Number(question("Preco da carteira de cigarros: "))

// processamento 
const cigarrosTotal = cigarros * 365 * anos
const carteiraTotal = cigarrosTotal / 20
const valorTotal = carteiraTotal * preco

// saída
console.log()
console.log("Fumar por", anos, "anos resultou em um gasto de: R$", valorTotal.toFixed(2))
