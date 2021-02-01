// Exo 1 Classe
// let codingSchool17 = [];
// let entre = nom => {
//     codingSchool17.push(nom);
//     console.log(`${nom} rentre en classe`);
// }

// let sort = nom => {
//     codingSchool17.splice(codingSchool17.indexOf(nom), 1);
//     console.log(`${nom} sort de la classe`);
// }
// console.log(codingSchool17)
// entre('Antoine');
// console.log(codingSchool17);
// entre('Saïd');
// console.log(codingSchool17)
// entre('Abdel');
// console.log(codingSchool17)
// entre('Nathan');
// console.log(codingSchool17)
// entre('Yasmina');
// console.log(codingSchool17)
// sort('Abdel');
// console.log(codingSchool17)
// entre('Gauthier');
// console.log(codingSchool17)
// sort('Saïd');
// console.log(codingSchool17)
// sort('Yasmina');
// console.log(codingSchool17)

// Exo 2 Premier
let estPremier = nbr => {
    for(let i = 2; i < nbr; i++) {
        if(nbr % i == 0){
            return(`${nbr} n'est pas un nombre premier`);
        }
    }
    return (`${nbr} est un nombre premier`);
}
console.log(estPremier(17))