
/**
 * F01_q35:
 * Leia um número inteiro (4 dígitos), calcule e escreva
 * a soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.
 */

import { question } from "readline-sync"

// entrada
const numero = Number(question("Digite o numero(4 digitos): "))

// processamento
const unidadeMilhar = Math.floor(numero / 1000)
const resto1 = numero % 1000
const centena = Math.floor(resto1 / 100)
const resto2 = resto1 % 100
const dezena = Math.floor(resto2 / 10)
const unidade = resto2 % 10

const soma = unidadeMilhar + centena + dezena + unidade

// saída
console.log()
console.log("Soma =", unidadeMilhar+"+"+centena+"+"+dezena+"+"+unidade, "=", soma)
