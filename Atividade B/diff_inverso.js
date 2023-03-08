
/**
 * F01_q32:
 * Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.
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
const diff = numero - inversao

// saída
console.log()
console.log("A diferença entre o número e seu inverso é:", diff)
