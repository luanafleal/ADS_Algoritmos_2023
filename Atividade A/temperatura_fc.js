
/**
 * F01_q21:
 * Leia uma temperatura em °F, calcule e escreva a equivalente em °C.
 * (t°C = (5 * t°F - 160) / 9).
 */

import { question } from "readline-sync"

// entrada
const temperaturaFahrenheit = Number(question("Temperatura em Graus Fahrenheit: "))

// processamento 
const temperaturaCelsius = (5 * temperaturaFahrenheit - 160) / 9

// saída
console.log()
console.log(temperaturaFahrenheit+"°F corresponde a", temperaturaCelsius+"°C")
