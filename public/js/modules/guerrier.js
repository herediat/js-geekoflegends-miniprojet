export class guerrier {
    constructor(nom, pntsvie, pntsattaque, pntsrage){
        this.nom = nom
        this.pntsvie = pntsvie
        this.pntsattaque = pntsattaque
        this.pntsrage = pntsrage
    }
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
}