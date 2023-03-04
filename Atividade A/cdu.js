
/**
 * F01_q05:
 * Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
 */

import { question } from "readline-sync"

// entrada
const numero = Number(question("Numero(3 digitos): "))

// processamento 
const centena = Math.floor(numero / 100)
const resto = numero%100
const dezena = Math.floor(resto/10)
const unidade = resto%10

const soma = centena + dezena + unidade

// saída
console.log()
console.log("Soma:", centena, "+", dezena, "+", unidade, "=", soma)
