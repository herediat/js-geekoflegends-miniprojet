// import { Sauron } from "./boss.js";
// import { Chronos } from "./boss.js";
// import { Lilith } from "./boss.js";

// let boss1 = new Sauron("Sauron", 1500, 35)
// let boss2 = new Chronos("Chronos", 1500, 35)
// let boss3 = new  Lilith("Lilith", 1500, 35)

// let tousBoss = [boss1.nom, boss2.nom, boss3.nom]
// let hasardBoss = tousBoss[Math.floor(Math.random() * tousBoss.length)]


//################################ GUÉRRIER ################################################
export class guerrier {
    constructor(nom, pntsvie, pntsattaque, pntsrage){
        this.nom = nom
        this.pntsvie = pntsvie
        this.pntsattaque = pntsattaque
        this.pntsrage = pntsrage
    }
    // ************** POSTURE DU HÉROS **********************
    defense(){
        this.pntsattaque = this.pntsattaque / 2;
        this.pntsvie = this.pntsvie *2.5;
    }

    attaque(){
        this.pntsattaque = this.pntsattaque *1.4;
        this.pntsvie = this.pntsvie -50
    }

    rageplus(){
        for (let i = 1; i <= 4; i++) {
            this.pntsrage = this.pntsrage +1;
            console.log(this.pntsrage); 
        };
        if (this.pntsrage == 4) {
            this.pntsattaque = this.pntsattaque +12
        }
    }

    //*************************** EFFECTUER MÉTHODE SWITCH ******************************
    attaquerBoss(){
        console.log(`${this.nom} attaque ${hasardBoss} et lui fait perdre - ${this.pntsattaque} points de vie `);

    }
}