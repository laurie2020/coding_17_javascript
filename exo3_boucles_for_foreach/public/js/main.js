// 1
// let multiplicateur = parseInt(prompt('entre un nombre'));
// for(i = 1; i <= 10; i++){
//     console.log(multiplicateur * i);
// }

// Exo 2
// let multiplicateur = parseInt(prompt('entre un nombre'));
// for(i = 1; i < 10; i+=2){
//      console.log(i * multiplicateur);
//  }

// Exo 3
// for(i = 20; i >= 0; i-=2){
//     console.log(i);
// }

// Exo 4
// let classe = ['Bilal', 'Cem', 'Yahya', 'Yassin', 'Mahad', 'Abdel', 'Gauthier', 'Camille', 'Amine', 'Antoine', 'Ayoub', 'Salim', 'Said', 'Yasmina', 'Mohammed', 'Nghia', 'Laurie', 'Redwane'];
// let longprenoms = [];
// for(i = 0; i < classe.length; i++){
//    if(classe[i].length > 5){
//        longprenoms.push(classe[i]);
//    }
// }
// console.log(longprenoms);

// Exo 5
// let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61];
// let grossesommes = [];
// for(i = 0; i < sommes.length; i++){
//     if(sommes[i] > 60){
//         grossesommes.push(sommes[i])
//     }
// }
// console.log(grossesommes)

// // Exo 6
// let donnees = [17, 7, 97, {}, "247", 67, 101, true, 34, 78 , [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100];
// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];

// for(i = 0; i < donnees.length; i++){
//     switch(typeof donnees[i]) {
//         case 'string':
//             typeString.push(donnees[i]);
//             break;
//         case 'number':
//             typeNumber.push(donnees[i]);
//             break;
//         case 'object':
//             typeObject.push(donnees[i]);
//             break;
//         default:
//             typeAutre.push(donnees[i]);
//             break;
//     }
// }
// for(let i = 0; i < donnees.length; i++){
//     if(typeof donnees[i] == 'string'){
//         typeString.push(donnees[i]);
//     }else if(typeof donnees[i] == 'number'){
//         typeNumber.push(donnees[i]);
//     }else if(typeof donnees[i] == 'object'){
//         typeObject.push(donnees[i]);
//     }else{
//         typeAutre.push(donnees[i]);
//     }
// }