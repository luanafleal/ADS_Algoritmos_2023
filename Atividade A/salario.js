
/**
 * F01_q12:
 * Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
 */

import { question } from "readline-sync"

// entrada
const salario = Number(question("Salario(R$): "))

// processamento 
const aumento = (salario * 0.25) + salario

// saída
console.log()
console.log("Novo Salário(R$):", aumento)
