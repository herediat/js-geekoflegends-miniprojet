export class mage {
    constructor(nom, pntsvie, pntsattaque){
        this.nom = nom
        this.pntsvie = pntsvie
        this.pntsattaque = pntsattaque
        this.pntsmana = []
    }
    defense(){
        this.pntsattaque = this.pntsattaque /2;
        this.pntsvie = this.pntsvie *2.5;
    }

    attaque(){
        this.pntsattaque = this.pntsattaque *1.4
        this.pntsvie = this.pntsvie -25
    }
    totalMana(){
        let pntsmana = [7, 9, 11]
        let hasardMana = pntsmana[Math.floor(Math.random()* pntsmana.length)];
        this.pntsmana = hasardMana;
        return hasardMana
    }
    nulMana(){
        for (let i = 0; i < this.pntsmana; i--) {
            this.pntsmana -=1
        };
        if (this.pntsmana == 0 ) {
            this.pntsattaque -=2
            console.log(`${this.nom} n'a plus de mana`);
            console.log(`${this.nom} passe son tour et donc n'attaque pas.`);
        };
        if (this.pntsattaque == 158) {
            this.pntsmana +=7
            console.log(`${this.nom} récupère ${this.pntsmana}`);
        }
    }
}