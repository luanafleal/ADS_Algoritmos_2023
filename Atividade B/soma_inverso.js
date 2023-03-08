
/**
 * F01_q33:
 * Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
 * (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).
 */

import { question } from "readline-sync"

// entrada
const numero = Number(question("Numero(3 digitos): "))

// processamento 
const centena = Math.floor(numero / 100)
const resto = numero % 100
const dezena = Math.floor(resto / 10)
const unidade = resto % 10

const inversao = unidade*100 + dezena*10 + centena
const soma = numero + inversao

// saída
console.log()
console.log("Número =", numero+"; inverso=", inversao) 
console.log("Soma =", numero, "+", inversao, "=", soma)
