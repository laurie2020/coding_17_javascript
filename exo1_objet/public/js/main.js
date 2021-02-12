// // Exo 1
// let moi = {
//     nom : "Iula-Elese",
//     prenom : "Laurie",
//     age : 20,
//     taille : 168
// }
// console.log(moi.age);

// // Exo 2
// let perso2 = {
//     nom : "Dupont",
//     prenom : "Jean",
//     age : 40,
//     taile : 180
// }

// // Exo 3
// let perso3 = {
//     nom : moi.nom,
//     prenom : "Laurie",
//     age : perso2.age,
//     taille : 168
// }

// // Exo 4
// let personne4 = {
//     prenom : "Laurie",
//     saluer(){
//         console.log(`Coucou ${this.prenom}`)
//     }
// }
// personne.saluer();

// Exo 5
let personne1 = {
    prenom : "Gabriel",
    age : 25
}

let personne2 = {
    prenom : "Sam",
    age : 18
}

let personne3 = {
    prenom : "Jean",
    age : 45
}

let voleur = {
    usurpation(personnage){
        this.prenom = personnage.prenom;
        this.age = personnage.age;
    }
}

voleur.usurpation(personne3);
console.log(voleur);