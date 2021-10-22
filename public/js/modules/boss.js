//################## BOSS1 ###############################
export class Sauron {
    constructor(nom, pntsvie, pntsattaque){
        this.nom = nom
        this.pntsvie = pntsvie
        pntsattaque = pntsattaque
    }
    enigme(){
        let enigme = ["J'entre dur et grand dans la bouche, mais j'en sort mou et petit, qui suis-je ?", "Je suis entouré de poils et je suis au milieu. J'ai une ouverture que tu peux voir qui s'ouvre et se ferme, qui suis-je ?", "Les femmes n'en ont pas, alors que les hommes l'ont, l'or l'a aussi et Pascal Obispo en a deux, qui suis-je ?"]
        let random1 = Math.floor(Math.random() * enigme.length)
        let choice1 = enigme[random1]
        let reponse = ["Un chewing-gum", "Un œil", "La lettre O"]
        if (this.pntsvie <= 300) {
            alert(choice1)
        }

        let maReponse = prompt("Inscrit ta réponse")
        if (random1 == 0 && maReponse == reponse[0]) {   
                alert(`Le boss ${this.nom} est mort`) 
            } else if (random1 == 1 && maReponse == reponse[1]) {
                alert(`Le boss ${this.nom} est mort`)
            } else if (random1 == 2 && maReponse == reponse[2]) {
                alert(`Le boss ${this.nom} est mort`)
            } else if (random1 == 3 && maReponse == reponse[3]) {
                alert(`Le boss ${this.nom} est mort`)
            } else{
                console.log("Tu es mort");
            }
        }
    }

    //########################## BOSS2 /################################

export class Chronos {
    constructor(nom, pntsvie, pntsattaque) {
        this.nom = nom
        this.pntsvie = pntsvie
        pntsattaque = pntsattaque
    }
    enigme(){
        let enigme = ["J'entre dur et grand dans la bouche, mais j'en sort mou et petit, qui suis-je ?", "Je suis entouré de poils et je suis au milieu. J'ai une ouverture que tu peux voir qui s'ouvre et se ferme, qui suis-je ?", "Les femmes n'en ont pas, alors que les hommes l'ont, l'or l'a aussi et Pascal Obispo en a deux, qui suis-je ?"]
        let random1 = Math.floor(Math.random() * enigme.length)
        let choice1 = enigme[random1]
        let reponse = ["Un chewing-gum", "Un œil", "La lettre O"]
        if (this.pntsvie <= 300) {
            alert(choice1)
        }

        let maReponse = prompt("Inscrit ta réponse")
        if (random1 == 0 && maReponse == reponse[0]) {     
            } else if (random1 == 1 && maReponse == reponse[1]) {
                alert(`Le boss ${this.nom} est mort`)
            } else if (random1 == 2 && maReponse == reponse[2]) {
                alert(`Le boss ${this.nom} est mort`)
            } else if (random1 == 3 && maReponse == reponse[3]) {
                alert(`Le boss ${this.nom} est mort`)
            } else{
                console.log("Tu es mort");
            }
        }
}

//################## BOSS3 ######################################

export class Lilith {
    constructor(nom, pntsvie, pntsattaque) {
        this.nom = nom
        this.pntsvie = pntsvie
        pntsattaque = pntsattaque
    }
    enigme(){
        let enigme = ["J'entre dur et grand dans la bouche, mais j'en sort mou et petit, qui suis-je ?", "Je suis entouré de poils et je suis au milieu. J'ai une ouverture que tu peux voir qui s'ouvre et se ferme, qui suis-je ?", "Les femmes n'en ont pas, alors que les hommes l'ont, l'or l'a aussi et Pascal Obispo en a deux, qui suis-je ?"]
        let random1 = Math.floor(Math.random() * enigme.length)
        let choice1 = enigme[random1]
        let reponse = ["Un chewing-gum", "Un œil", "La lettre O"]
        if (this.pntsvie <= 300) {
            alert(choice1)
        }
        let maReponse = prompt("Inscrit ta réponse")
        if (random1 == 0 && maReponse == reponse[0]) {     
            } else if (random1 == 1 && maReponse == reponse[1]) {
                alert(`Le boss ${this.nom} est mort`)
            } else if (random1 == 2 && maReponse == reponse[2]) {
                alert(`Le boss ${this.nom} est mort`)
            } else if (random1 == 3 && maReponse == reponse[3]) {
                alert(`Le boss ${this.nom} est mort`)
            } else{
                console.log("Tu es mort");
            }
        }
}