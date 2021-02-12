class Objet {
    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;
    }
}

let pull = new Objet('pull', 20);
let pantalon = new Objet('pantalon', 30);
let boite = [pull, pantalon];

class Personnage {
    constructor(nom, sac, argent){
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
        this.prendre = (objet) => {
            this.sac.push(boite.splice(boite.indexOf(objet), 1));
        };
        this.acheter = (vendeur, objet) => {
            this.sac.push(vendeur.sac.splice(vendeur.sac.indexOf(objet), 1));
            this.argent -= objet.prix;
            vendeur.argent += objet.prix;
        };
    }
}

let jean = new Personnage('jean', [], 100);
let michel = new Personnage('michel', [], 100);
console.log(jean, michel)

jean.acheter(michel, pantalon);