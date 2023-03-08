
/**
 * F01_q44:
 * Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
 * quantidade de cada um desses componentes para se obter certa
 * quantidade de latão (em kg), informada pelo usuário.
 */

import { question } from "readline-sync"

// entrada
const kgLatao = Number(question("Quantidade de latao(kg): "))

// processamento 
const cobre = kgLatao * 0.70
const zinco = kgLatao * 0.30

// saída
console.log()
console.log("COMPOSIÇÃO DE", kgLatao, "KG DE LATÃO")
console.log("Cobre(70%):", cobre, "Kg")
console.log("Zinco(30%):", zinco, "Kg")
