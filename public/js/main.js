//#################### Boss3 #################

import { Sauron } from "./modules/boss.js";
let boss1 = new Sauron("Sauron", 1500, 35)
console.log(boss1);

//**************************************** */
import { Chronos } from "./modules/boss.js";
let boss2 = new Chronos("Chronos", 1500, 35)

//******************************************** */
import { Lilith } from "./modules/boss.js";
let boss3 = new Lilith("Lilith", 1500, 35)
console.log(boss3);

//####################### GUERRIER #################

import { guerrier } from "./modules/guerrier.js";
let Amonn = new guerrier("Amonn", 200, 50, 0)

//############### ARCHER ####################
import { archer } from "./modules/archer.js";
let Zoro = new archer("Zoro", 120, 100)

//################### MAGE ####################
import { mage } from "./modules/mage.js";
let Zelda = new mage("Zelda", 100, 150, 130)