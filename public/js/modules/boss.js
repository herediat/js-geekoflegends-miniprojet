import { guerrier } from "./guerrier.js"
import { mage } from "./mage.js"
import { archer } from "./archer.js"

let Amonn = new guerrier("Amonn", 200, 50, 0)
let Zelda = new mage("Zelda", 100, 160)
let Zoro = new archer("Zoro", 120, 100)

let tousHeros = [Amonn.nom, Zelda.nom, Zoro.nom]
let hasardHeros = tousHeros[Math.floor(Math.random() * tousHeros.length)]



//################## BOSS1 ###############################
export class Sauron {
    constructor(nom, pntsvie, pntsattaque){
        this.nom = nom
        this.pntsvie = pntsvie
        this.pntsattaque = pntsattaque
    }

    //**************************/ ENIGME DU BOSS ***************************
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
        //********************** LE BOSS QUI ATTAUQE UN HÉROS DE MANIERE ALÉATOIRE *****************************/
        attaquerHero(){
            console.log(`${this.nom} attaque ${hasardHeros} et lui fait perdre - ${this.pntsattaque} points de vie `);
            if (hasardHeros == "Amonn") {
                Amonn.pntsvie -= this.pntsattaque
                console.log(Amonn);
            }else if (hasardHeros == "Zelda") {
                Zelda.pntsvie -= this.pntsattaque
                console.log(Zelda);
            }else if (hasardHeros == "Zoro") {
                Zoro.ptnsvie -= this.pntsattaque
                console.log(Zoro);
            }
        }
    }


    //########################## BOSS2 /################################

export class Chronos {
    constructor(nom, pntsvie, pntsattaque) {
        this.nom = nom
        this.pntsvie = pntsvie
        this.pntsattaque = pntsattaque
    }
    //************************* */ ENIGME DU BOSS ***************************
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

        //********************** LE BOSS QUI ATTAUQE UN HÉROS DE MANIERE ALÉATOIRE *****************************/
        attaquerHero(){
            console.log(`${this.nom} attaque ${hasardHeros} et lui fait perdre - ${this.pntsattaque} points de vie `);
            if (hasardHeros == "Amonn") {
                Amonn.pntsvie -= this.pntsattaque
                console.log(Amonn);
            }else if (hasardHeros == "Zelda") {
                Zelda.pntsvie -= this.pntsattaque
                console.log(Zelda);
            }else if (hasardHeros == "Zoro") {
                Zoro.ptnsvie -= this.pntsattaque
                console.log(Zoro);
            }
        }
}


//################## BOSS3 ######################################

export class Lilith {
    constructor(nom, pntsvie, pntsattaque) {
        this.nom = nom
        this.pntsvie = pntsvie
        this.pntsattaque = pntsattaque
    }
     //************************* */ ENIGME DU BOSS ***************************
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
    
        //********************** LE BOSS QUI ATTAUQE UN HÉROS DE MANIERE ALÉATOIRE *****************************/
    attaquerHero(){
        console.log(`${this.nom} attaque ${hasardHeros} et lui fait perdre - ${this.pntsattaque} points de vie `);
        if (hasardHeros == "Amonn") {
            Amonn.pntsvie -= this.pntsattaque
            console.log(Amonn);
        }else if (hasardHeros == "Zelda") {
            Zelda.pntsvie -= this.pntsattaque
            console.log(Zelda);
        }else if (hasardHeros == "Zoro") {
            Zoro.ptnsvie -= this.pntsattaque
            console.log(Zoro);
        }
    }
}