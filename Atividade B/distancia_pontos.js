
/**
 * F01_q42:
 * Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
 * ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.
 */

import { question } from "readline-sync"

// entrada
const x1 = Number(question("x1: "))
const y1 = Number(question("y1: "))
const x2 = Number(question("x2: "))
const y2 = Number(question("y2: "))

// processamento 
const dx = (x2 - x1)**2
const dy = (y2 - y1)**2
const distancia = Math.sqrt(dx + dy)

// saída
console.log()
console.log("A distância entre P1("+x1+","+y1+") e P2("+x2+","+y2+") é:", distancia.toFixed(2))
