class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes;
    }
}
let molengeek = new Lieu('molengeek', []);
let snack = new Lieu('snack', []);
let maison = new Lieu('maison', ['jean']);

class Bus {
    constructor(personnes, caisse) {
        this.personnes = personnes;
        this.caisse = caisse;
        this.embarquer = (personne) => {
            if(personne.argent >= 2.80){
                personne.argent -= 2.80;
                this.caisse += 2.80;
                this.personnes.push(personne.prenom);
            }
        };
    }
}

class Personne {
    constructor(nom, prenom, argent) {
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
        this.se_deplacer = (depart, destination, personne) => {
            depart.personnes.shift();
            bus1.embarquer(personne);
            destination.personnes.push(this.prenom);
            
        };
    }
}
let jean = new Personne('dupont', 'jean', 100);
let bus1 = new Bus([], 100);

console.log(jean, bus1);
jean.se_deplacer(maison, molengeek, jean);
console.log(maison, bus1, molengeek, jean);
jean.se_deplacer(molengeek, snack, jean);
molengeek.push(snack.shift());
jean.se_deplacer(molengeek, maison, jean);