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
}