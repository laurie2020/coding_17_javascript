let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol"];

// 1.
// leTableau.forEach(element => {
//     console.log(`l'element ${element} est de type ${typeof element}`);
// });

// 2.
// let lesIntegers = [];
// let lesString = [];
// let lesAutres = [];

// leTableau.forEach(element => {
//     switch(typeof element){
//         case 'number':
//             lesIntegers.push(element);
//             break;
//         case 'string':
//             lesString.push(element);
//             break;
//         default:
//             lesAutres.push(element);
//             break;
//     }
// });
// console.log(leTableau);
// console.log(lesIntegers);
// console.log(lesString);
// console.log(lesAutres);

// 3.
// let lesGrandsIntegers = [];
// let lesPetitsIntegers = [];
// let lesPetitsStrings = [];
// let lesGrandsStrings = [];

// leTableau.forEach(element => {
//     if(typeof element == 'number'){
//         if(element < 100){
//             lesPetitsIntegers.push(element);
//         }else{
//             lesGrandsIntegers.push(element);
//         }
//     }else if(typeof element == 'string'){
//         if(element.length < 6){
//             lesPetitsStrings.push(element);
//         }else{
//             lesGrandsStrings.push(element);
//         }
//     }
// });
// console.log(lesPetitsIntegers);
// console.log(lesGrandsIntegers);
// console.log(lesPetitsStrings);
// console.log(lesGrandsStrings);

// 4.
// let petitPot = [];
// let grandPot= [];
// for(let i = 0; i < 11; i++){
//     let nombre = Math.round(parseInt(prompt('entre un nombre')));
//     if(nombre < 0){
//         while(nombre < 0){
//             nombre= Math.round(parseInt(prompt('trop petit')));
//         }
//     }else if(nombre <= 100){
//         petitPot.push(nombre);
//     }else{
//         grandPot.push(nombre);
//     }
// }
// console.log(petitPot);
// // console.log(grandPot);

// 5.
// pt.1
// let fruits = ['banane', 'fraise', 'pomme', 'raisin', 'poire', 'kiwi', 'mangue'];
// let legumes = ['aubergine', 'carotte', 'chou', 'radis', 'haricot', 'celeri', 'poivron'];
// let panierFruits = [];
// let panierLegumes = [];
// let panier = [];
// for(i = 0; i < 8; i++){
//     let element = prompt('entre un fruits ou un legume');
//     if(fruits.indexOf(element) >= 0){
//         panierFruits.push(element);
//     }else if(legumes.indexOf(element) >= 0){
//         panierLegumes.push(element);
//     }else{
//         alert('ceci n\'est pas un fruit ou legumes');
//     }
// }
// alert(`fruits: ${panierFruits}, legumes: ${panierLegumes}`);

// 6.
let sousVetements = [];
let vetement = [];
let chaussures = [];
let vetements = ['chaussure classique','t-shirt super héro','pull col roulé','basket de sport','chaussettes blanches','pentalon noir','soutien-gorge','pull rayé','t-shirt soleil souriant','caleçon blanc']
vetements.forEach(element => {
    let tiroir = prompt(`${element} ?`)
    switch(tiroir){
        case 'sousVetements':
            sousVetements.push(element);
            break;
        case 'vetement':
            vetement.push(element);
            break;
        case 'chaussures':
            chaussures.push(element);
            break
    }
});
console.log(sousVetements);
console.log(vetement);
console.log(chaussures);