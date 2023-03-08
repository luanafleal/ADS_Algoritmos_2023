
/**
 * F01_q41:
 * O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
 * distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
 * seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
 * escreva o custo ao consumidor.
 */

import { question } from "readline-sync"

// entrada
const custoFabrica = Number(question("Custo de Fabrica do Carro: "))

// processamento 
const valorCarro = custoFabrica + (0.28 * custoFabrica) + (0.45 * custoFabrica)

// saída
console.log()
console.log("Valor do carro novo: R$", valorCarro.toFixed(2))
