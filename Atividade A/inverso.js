
/**
 * F01_q:11
 * Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235).
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
console.log("Inverso:", unidade, dezena, centena)
