// import {Sauron} from "./boss.js";
// import { Chronos } from "./boss.js";
// import { Lilith } from "./boss.js";

// let boss1 = new Sauron("Sauron", 1500, 35)
// let boss2 = new Chronos("Chronos", 1500, 35)
// let boss3 = new Lilith("Lilith", 1500, 35)

// let tousBoss = [boss1.nom, boss2.nom, boss3.nom]
// let hasardBoss = tousBoss[Math.floor(Math.random() * tousBoss.length)]


//################################ ARCHER ################################################
export class archer{
    constructor(nom, ptnsvie, ptnsattaque){
        this.nom = nom
        this.ptnsvie = ptnsvie
        this.ptnsattaque = ptnsattaque
        this.nbrfleches = []
    }
    
    totalFleches(){
        let nbrfleches = [7, 8, 9, 10, 11];
        let hasardFleches = nbrfleches[Math.floor(Math.random()* nbrfleches.length)];
        this.nbrfleches = hasardFleches;
        return hasardFleches;
    }
    
    // ************** POSTURE DU HÉROS **********************
    defense(){
        this.ptnsattaque = this.ptnsattaque /2
        this.ptnsvie = this.ptnsvie * 2.5
    }

    attaque(){
        this.ptnsattaque = this.ptnsattaque * 1.4
        this.ptnsvie = this.ptnsvie -30
    }

    consomFleches(){
        for (let i = 0; i < this.nbrfleches; i--) {
            console.log(`Il reste : ${this.nbrfleches} flèches à ${this.nom}`);
            this.nbrfleches -=2
        }
        if (this.nbrfleches == 5) {
            console.log(`${this.nom} n'a bientôt plus de flèches`);
        }
        if (this.nbrfleches == 0) {
            console.log(`${this.nom} n'a plus de flèches`);
        }
    }
    recupFleches(){
    for (let i = 0; this.nbrfleches < 6; i++) {
            this.nbrfleches +=1
            console.log(`${this.nom} récupère des flèches : ${this.nbrfleches}`);
        }
    }
//*********************** EFFECTUER MÉTHODE SWITC *****************************
    // attaquerBoss(){
    //     console.log(`${this.nom} attaque ${hasardBoss} et lui fait perdre - ${this.pntsattaque} points de vie `);

    // }
}