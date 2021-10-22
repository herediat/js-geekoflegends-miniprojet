//#################### Boss3 #################

// import {Sauron} from "./modules/boss.js";
// let boss1 = new Sauron("Sauron", 1500, 35)
// boss1.enigme()
// console.log(boss1);

// //**************************************** */
// import { Chronos } from "./modules/boss.js";
// let boss2 = new Chronos("Chronos", 1500, 35)
// boss2.enigme()
// console.log(boss2);

// //******************************************** */
// import { Lilith } from "./modules/boss.js";
// let boss3 = new Lilith("Lilith", 1500, 35)
// boss3.enigme()
// console.log(boss3);

// console.log("__________________________________________");

//####################### GUERRIER #################
// import { guerrier } from "./modules/guerrier.js";
// let Amonn = new guerrier("Amonn", 200, 50, 0)
// // Amonn.defense()
// Amonn.attaque()
// console.log(Amonn);

// //################### MAGE ####################
// import { mage } from "./modules/mage.js";
// let Zelda = new mage("Zelda", 100, 160)
// Zelda.defense()
// Zelda.attaque()
// Zelda.totalMana()
// Zelda.nulMana()
// console.log(Zelda);

// //############### ARCHER ####################
import { archer } from "./modules/archer.js";
let Zoro = new archer("Zoro", 120, 100)
// Zoro.defense()
// Zoro.attaque()
Zoro.totalFleches()
// Zoro.consomFleches()
Zoro.recupFleches()
console.log(Zoro);
