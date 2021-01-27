// Exo 1 Boucles simples
// 1.
// let nombre;

// do {
//     nombre = prompt('Entre un nombre :');
// }while(nombre === '')

// 2.
// let nombre;
// do {
//     nombre = parseInt(prompt('Entre un nombre plus grand que 10'));
// }while(nombre <= 10)

// 3.
// while(i){
//     i++;
// }
// 4.
// let i = 3;
// while(i <= 6){
//     console.log(i++);
// }

// 5.
// let i = 0
// while(i){
//     console.log(i);
//     i+=2;
// }

// Exo 2
// let panierLegumes = ['carotte', 'poivron', 'courgette', 'betterave'];
// let caisseLegumes = [];
// while(panierLegumes[0]){
//     caisseLegumes.push(panierLegumes.shift());
// }

// Exo4
// let enigme;
// let reponse = 'jonathan';
// do{
//     enigme =  prompt('Qu\'est-ce qui est jaune, et qui attend ?');
// }while(enigme != reponse)
// alert('Bonne réponse !');

// Exo5
// let enigme = prompt('Qu\'est-ce qu est jaune et qui attend ?');
// let reponse = 'jonathan';
// while(enigme != reponse){
//     enigme = prompt('Qu\'est-ce qu est jaune et qui attend ?');
// }
// alert('Bonne réponse !');

// Exo6
// let covid = 2020;
// let randomYear = Math.floor(Math.random() * (2018 - 1970) + 1970);
// let question;
// let reponse = covid - randomYear;
// let i = 0;
// do{
//     question = prompt(`Si je suis né(e) en ${randomYear}, quel âge ai-je aujourd’hui ?`);
//     i++;
// }while(question != reponse && i < 3)
// if(question != reponse){
//     alert('retournes a l\'école');
// }else{
//     alert('Bonne reponse !');
// }

// Exo7
// let fruits = [];
// while(fruits.length < 8){
//     fruits.push(prompt('Ajouter un fruit').toLowerCase());
// }
// let modif = prompt(fruits + ' Voulez-vous retirer un fruit ?');
// if(fruits.indexOf(modif) < 0){
//     alert('Bonne appetit !');
// }else{
//     fruits.splice(fruits.indexOf(modif), 1);
// }

// let i = 0;
// let fruits2 = [];
// while(i < fruits.length){
//     fruits2.push(fruits[i].charAt(0).toUpperCase() + fruits[i].slice(1));
//     i++;
// }
// alert(fruits2);