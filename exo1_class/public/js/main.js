// EXO1
class Personnage {
    constructor(age, nom, ville){
        this.age = age;
        this.nom = nom;
        this.ville = ville;
        this.sePresenter = () => {
            console.log(`Bonjour, je m'appelle ${this.nom} !`);
        }
    }
}

let jean = new Personnage(40, 'jean', 'paris');
let michel = new Personnage(25, 'michel', 'bruxelles');

jean.sePresenter();
michel.sePresenter();