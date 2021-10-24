//#################### Boss3 #################
import {Sauron} from "./modules/boss.js";
let boss1 = new Sauron("Sauron", 1500, 35)
// boss1.enigme()
// boss1.attaquerHero()
// console.log(boss1);

// //**************************************** */
import { Chronos } from "./modules/boss.js";
let boss2 = new Chronos("Chronos", 1500, 35)
// boss2.enigme()
// boss2.attaquerHero()
// console.log(boss2);

// //******************************************** */
import { Lilith } from "./modules/boss.js";
let boss3 = new Lilith("Lilith", 1500, 35)
// boss3.enigme()
// boss3.attaquerHero()
// console.log(boss3);

// console.log("__________________________________________");

//####################### GUERRIER #################
import { guerrier } from "./modules/guerrier.js";
let Amonn = new guerrier("Amonn", 200, 50, 0)
// Amonn.attaquerBoss()
// // Amonn.defense()
// Amonn.attaque()
// console.log(Amonn);

// //################### MAGE ####################
import { mage } from "./modules/mage.js";
let Zelda = new mage("Zelda", 100, 160)
// attaquerBoss()
// Zelda.defense()
// Zelda.attaque()
// Zelda.totalMana()
// Zelda.nulMana()
// console.log(Zelda);

// //############### ARCHER ####################
import { archer } from "./modules/archer.js";
let Zoro = new archer("Zoro", 120, 100)
// attaquerBoss()
// // Zoro.defense()
// // Zoro.attaque()
// Zoro.totalFleches()
// // Zoro.consomFleches()
// Zoro.recupFleches()
// console.log(Zoro);

//###################### LANCEMENT DU JEU ######################
let tousBoss = [boss1.nom, boss2.nom, boss3.nom]
let hasardBoss = tousBoss[Math.floor(Math.random() * tousBoss.length)]
console.log(hasardBoss);

let tousHeros = [Amonn.nom, Zelda.nom, Zoro.nom]
let hasardHeros = tousHeros[Math.floor(Math.random() * tousHeros.length)]
console.log(hasardHeros);