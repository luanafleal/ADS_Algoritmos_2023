
/**
 * F01_q45:
 * Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para
 * decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o
 * saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor
 * disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de
 * notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87, o algoritmo deveria
 * indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um
 * algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o
 * critério da distribuição ótima.
 */

import { question } from "readline-sync"

// entrada
const quantia = Number(question("Digite a quantia(R$): "))

// processamento 
const nota50 = Math.floor(quantia / 50)
const resto50 = quantia % 50
const nota10 = Math.floor(resto50 / 10)
const resto10 = resto50 % 10
const nota5 = Math.floor(resto10 / 5)
const nota1 = resto10 % 5

// saída
console.log()
console.log(nota50,"NOTAS DE R$ 50.00")
console.log(nota10,"NOTAS DE R$ 10.00")
console.log(nota5,"NOTAS DE R$ 5.00")
console.log(nota1,"NOTAS DE R$ 1.00")
