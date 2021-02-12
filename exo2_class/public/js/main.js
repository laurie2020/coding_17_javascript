// Lieux
class Lieux {
    constructor(nom, contenu){
        this.nom =  nom;
        this.contenu = contenu;
    }
}

let maison = new Lieux('maison', []);
let epicerie = new Lieux('epicerie', []);
epicerie.ingredients = [];
let cuisine = new Lieux('cusisine', []);
cuisine.ingedients = [];

// ingredients
class Ingredients {
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new Ingredients('poivron', 'entier', 1);
let oeuf = new Ingredients('oeuf', 'entier', 2);
let oignon = new Ingredients('oignon', 'entier', 2);
let epice = new Ingredients('epice', 'moulut', 3.25);
let paprika = new Ingredients('paprika', 'moulu', 1.5);
let fromage = new Ingredients('fromage', 'coupé', 1.6);

// personne
class Personne {
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        this.se_deplacer = (x) => {
        };
        this.payer = (x) => {
        };
        this.couper = (x, y) => {
        };
    }
}
let maxime = new Personne('Maxime', 'néant', 100, []);