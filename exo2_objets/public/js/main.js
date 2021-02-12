// Exo 1
// let personnage = {
//     nom: "Dupont",
//     prenom: "Jean",
//     sePresenter(){
//         console.log(`Bonjour, je m'appelle ${this.nom} ${this.prenom}`);
//     }
// }
// personnage.sePresenter();

// Exo 2
let jean = {
    setAge(){
        this.age = prompt('Entrer l\'age');
    }
}
jean.setAge();
alert(`Jean a ${jean.age} ans`);

