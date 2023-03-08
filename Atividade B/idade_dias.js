
/**
 * F01_q36:
 * Leia a idade de uma pessoa expressa em anos, meses e
 * dias e escreva-a expressa apenas em dias.
 */

import { question } from "readline-sync"

// entrada
console.log("Sua idade(Ano-Meses-Dias)")
const ano = Number(question("Ano(s): "))
const mes = Number(question("Mes(s): "))
const dia = Number(question("Dia(s): "))

// processamento
const diaAno = ano * 365
const diaMes = mes * 30
const soma = diaAno + diaMes + dia

// saída
console.log()
console.log("Idade em dias:", soma, "dias")
