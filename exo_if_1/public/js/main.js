// // 1
// console.log(1 == "1");
// // 2
// console.log(1 === "1");
// // 3
// let prenom = prompt('Entre ton prenom');
// if(prenom.length<5){
//     alert('Ton nom est trop court');
// }
// // 4
// let calcul = prompt('Resous 1 + 1');
// if(calcul == 2){
//     alert('Felicitations');
// }else{
//     alert('C\'est faux!');
// }


// // 5
// let multiplication = prompt('5 * 5');
// let reponse = 25;
// if(multiplication == 25){
//     alert(`Felicitations la réponse était bien ${multiplication}!`);
// }else{
//     alert(`C'est dommage, tu n'étais qu'a ${Math.abs(parseInt(multiplication)-25)} unité de la bonne réponse`)
// }



// // 6
// let tab = [];
// // let i = 0;
// // while(tab.length<3){
// //     tab[i] = prompt('Ajouter des elements');
// //     alert(`il manque encore ${3-tab.length} elements`);
// //     i++;
// // }
// // alert(`contenu du tableau ${tab}`);
// tab.push(prompt('Ajouter un element'));
// if(tab.length<3){
//     alert(`il manque encore ${3-tab.length} elements`);
//     tab.push(prompt('Ajouter un element'));
//     if(tab.length<3){
//         alert(`il manque encore ${3-tab.length} elements`);
//         tab.push(prompt('Ajouter un element'));
//     }
// }
// alert(`le contenu du tableau ${tab}`);



// // 7

// let grandNombres = [];
// let petitNombres = [];
// let nombre = prompt('Entre un nombre');
// if (nombre<12){
//     petitNombres.push(nombre);
// }else if(nombre>=12){
//     grandNombres.push(nombre);
// }
// nombre = prompt('Entre un nombre');
// if (nombre<12){
//     petitNombres.push(nombre);
// }else if(nombre>=12){
//     grandNombres.push(nombre);
// }
// nombre = prompt('Entre un nombre');
// if (nombre<12){
//     petitNombres.push(nombre);
// }else if(nombre>=12){
//     grandNombres.push(nombre);
// }
// nombre = prompt('Entre un nombre');
// if (nombre<12){
//     petitNombres.push(nombre);
// }else if(nombre>=12){
//     grandNombres.push(nombre);
// }
// alert(`petitNombres: ${petitNombres}, grandNombres: ${grandNombres}`);


// // 8
// let notes = [];
// notes.push(prompt('Entrez votre note'));
// notes.push(prompt('Entrez votre note'));
// notes.push(prompt('Entrez votre note'));
// notes.push(prompt('Entrez votre note'));
// notes.push(prompt('Entrez votre note'));
// let average = (parseInt(notes[0]) + parseInt(notes[1]) + parseInt(notes[2]) + parseInt(notes[3]) + parseInt(notes[4]))/5;
// if(average>=50){
//     alert('Vous avez reussi l\'exam !');
// }else if(average>=0 && average<50){
//     alert('T nul...');
// }else(
//     alert('t\'a mal rentré tes notes')
// )

let classe = ["amine", "ayoub", "bilal", "majda", "redwane", "yahya", "yassin", "nghia", "camille", "antoine", "cem", "abdel", "gauthier", "mahad", "salim", "said", "mohammed", "yasmina"];
let random = [];
let nom = classe[Math.round(Math.random()*classe.length)];
random.push(nom);
let nom2 = classe[Math.round(Math.random()*classe.length)];
if(nom!=nom2){
    random.push(nom2);
}else()