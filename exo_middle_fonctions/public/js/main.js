// Exo 1 reverseNumber
// let reverseNumber = nombre => {
//     nombre = nombre.toString().split("");
//     let length = nombre.length - 1
//     for(let i = 0; i < nombre.length / 2; i++){
//         let temp = nombre[i]
//         nombre[i] = nombre[length];
//         nombre[length] = temp;
//         length -= 1;
//     }
//     return parseInt(nombre.join(""));
// }
// console.log(reverseNumber(851));

// Exo 2 Pair
// let estPair = nombre => {
//     switch(nombre % 2) {
//         case 0 :
//             console.log(`Le nombre ${nombre} est pair, il est divisible par 2 : ${nombre} / 2 = ${nombre / 2}`);
//             break;
//         default:
//             console.log('Ce nombre est impair, il n\' est pas divisible par 2.');
//     }
// }
// estPair(4);

// Exo 3 logIn
// let logIn = mdp => {
//     let essaie;
//     do{
//         essaie = prompt('Entrer le mot de passe :')
//     }while(essaie != mdp)
//     alert('Vous êtes connecté');
// }
// logIn('laurie');
