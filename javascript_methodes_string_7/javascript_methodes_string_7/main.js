// Exo 1
// let mot = prompt('Entrez un mot:');
// let del = prompt('Entrez la lettre que vous voulez retirer du mot:')
// alert(mot.replace(del, ''));
// Exo 2
// let mot = prompt('Entrez un mot:');
// let random = Math.floor(Math.random()*mot.length-1);
// alert(mot.replace(mot[random], ''));
// Exo 3
// - Déclenchez un premier prompt avec comme question "Entrez votre prénom" (ex : Nathan)
alert('1');
let prenom = prompt('Entrez votre prénom:');
let longueur = prenom.length;
// - Déclenchez un premier prompt avec comme question "Entrez votre nom" (ex : Van Dyck)
alert('2');
let nom = prompt('Entrez votre nom:');
// - Déclenchez un premier prompt avec comme question "Entrez votre age" (ex : 24)
alert('3');
let age = prompt('Entrez votre age:');
// - Déclenchez un premier prompt avec comme question "Entrez votre taille" (ex : 1m82 (sous ce format !))
alert('4');
let taille = prompt('Entrez votre taille:');
// - Affichez votre nom avec 2 lettres en majuscule (ex: VaN DYck)
alert('5');
let length = nom.length;
let number1 = Math.floor(Math.random()*(length-1));
let number2 = Math.floor(Math.random()*(length-1));
alert(nom.replace(nom[number1], nom[number1].toUpperCase()).replace(nom[number2], nom[number2].toUpperCase()));
// - Affichez la première lettre de votre prénom en majuscule le reste en minuscule et retire deux lettres au hasard (ex: Ntha)
alert('6');
let prenom2 = prenom.toLowerCase().replace(prenom[0], prenom[0].toUpperCase());
let nombre1 = Math.floor(Math.random()*(longueur-1));
let letter = prenom.charAt(nombre1);
prenom2 = prenom2.replace(letter, '');
let longueur2 = (prenom2.length)-1;
nombre1 = Math.floor(Math.random()*(longueur2));
letter = prenom.charAt(nombre1);
prenom2 = prenom2.replace(letter, '');
alert(prenom2);
// - Affichez le nombre d'années de votre age en mois (ex: 24 (ans) == 288 mois)
alert(age*12);
// - Affichez votre taille en cm (ex: 182 cm)
alert(taille.replace('m', ''))

alert(`Bonjour ${prenom} ${nom}, ton prénom comporte normalement ${prenom.length} lettres mais 2 ont été perdues en chemin, tu es agé de ${age*12} et tu fais ${taille.replace('m', '')} cm`);

