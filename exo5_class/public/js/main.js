// PARTIE 1

class Eleve {
    constructor(prenom, nom, sexe, age) {
        this.prenom = prenom;
        this.nom = nom;
        this.sexe = sexe;
        this.age = age;
        this.presenter = () => {
            if(this.sexe == "h"){
                alert(`Bonjour Monsieur ${this.prenom} ${this.nom}`);
            }else if(this.sexe == "f"){
                alert(`Bonjour Madame ${this.prenom} ${this.nom}`);
            }else{
                alert(`Bonjour le non binaire ${this.prenom} ${this.nom}`);
            }
        }
        this.galoche = (personne) => {
            if(this.sexe != personne.sexe){
                alert('Je tembrasse');
            }else{
                alert('Tu pues');
            }
        }
    }
}
let eleve1 = new Eleve('pierre', 'dupont', 'h', 25);
let eleve2 = new Eleve('raphael', 'lefevre', 'h', 23);
let eleve3 = new Eleve('stephane', 'besson', 'nb', 24);
let eleve4 = new Eleve('lucie', 'jean', 'f', 22);

eleve1.presenter();
eleve2.presenter();
eleve3.presenter();
eleve4.presenter();

eleve1.galoche(eleve2);
eleve2.galoche(eleve3);
eleve3.galoche(eleve4);