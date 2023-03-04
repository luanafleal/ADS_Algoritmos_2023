
/**
 * F01_q20:
 * Leia uma temperatura em °C, calcule e escreva a equivalente em °F.
 * (t°F = (9 * t°C + 160) / 5)
 */

import { question } from "readline-sync"

// entrada
const temperaturaCelsius = Number(question("Temperatura em Graus Celsius: "))

// processamento 
const temperaturaFahrenheit = (9 * temperaturaCelsius + 160) / 5

// saída
console.log()
console.log(temperaturaCelsius+"°C corresponde a", temperaturaFahrenheit+"°F")
