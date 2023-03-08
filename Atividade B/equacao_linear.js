
/**
 * F01_q43:
 * Um sistema de equações lineares do tipo ax+by = c | dx+ey = f , pode ser resolvido segundo mostrado abaixo
 * x=ce-bf/ae-bd | y=af-cd/ae-bd
 * Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.
 */

import { question } from "readline-sync"

// entrada
const a = Number(question("Coeficiente A: "))
const b = Number(question("Coeficiente B: "))
const c = Number(question("Coeficiente C: "))
const d = Number(question("Coeficiente D: "))
const e = Number(question("Coeficiente E: "))
const f = Number(question("Coeficiente F: "))

// processamento 
const y = ((a*f) - (c*d)) / ((a*e) - (b*d))
const x = ((c*e) - (b*f)) / ((a*e) - (b*d))

// saída
console.log()
console.log("X =", x.toFixed(3))
console.log("Y =", y.toFixed(3))
