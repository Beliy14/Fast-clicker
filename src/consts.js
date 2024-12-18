import monkey1 from "./assets/1.png"
import monkey2 from "./assets/2.png"
import monkey3 from "./assets/3.png"
import monkey4 from "./assets/4.png"
import monkey5 from "./assets/5.png"
import monkey6 from "./assets/6.png"

export const monkeys = {
  1: { img: monkey1, name: { en: "Dryopithecus", ru: "Дриопитек" } },
  2: { img: monkey2, name: { en: "Australopithecus", ru: "Австралопитек" } },
  3: { img: monkey3, name: { en: "Homo erectus", ru: "Человек прямоходящий (древнейший)" } },
  4: { img: monkey4, name: { en: "Cro-Magnon", ru: "Кроманьонец" } },
  5: { img: monkey5, name: { en: "Neanderthal", ru: "Неандерталец" } },
  6: { img: monkey6, name: { en: "Modern man", ru: "Современный человек" } },
}

export const countBorder = {
  1: "100",
  2: "200",
  3: "400",
  4: "800",
  5: "1500",
  6: "3000",
}

export const levelsAutoclicker = [
  { level: 1, price: "100", autoclick: 2 },
  { level: 2, price: "250", autoclick: 3, shouldLevel: { en: "LVL 1", ru: "Ур. 1" } },
  { level: 3, price: "500", autoclick: 4, shouldLevel: { en: "LVL 2", ru: "Ур. 2" } },
  { level: 4, price: "800", autoclick: 5, shouldLevel: { en: "LVL 3", ru: "Ур. 3" } },
]

export const MAX_LEVEL = 7
export const BUSTER_COOLDOWN = 60000
export const BUSTER_TIME = 30000