// 1.
// let prenom = prompt('Entre un prénom :').trim();
// if(prenom.length > 0) {
//     alert(prenom[0]);
// }else {
//     alert('T\'as rien rentré');
// }

// 2.
// let prenom = prompt('Entre un prenom :').trim();
// if(prenom.length > 0){
//     alert(prenom.slice(1));
// }else {
//     alert('T\'as rien rentré');
// }

// 3.
// let prenom = prompt('Entre un prenom').trim();
// if(prenom.length >= 5){
//     alert(prenom[4]);
// }else{
//     alert('le penom est trop court');
// }

// 4.
// let prenom = prompt('Entre un prenom').trim();
// if(prenom.length >= 5){
//     alert(`le cinquième caractre est ${prenom[4]}`);
// }else if(prenom.length > 0 && prenom.length < 5){
//     alert(`Je renvoi la dernière lettre : ${prenom[prenom.length - 1]}, car ton prenom est trop court`)
// }else {
//     alert('T\'as pas rentré de prenom');
// }

// 5.
// let prenom = prompt('Entre un prenom').trim();
// if(prenom.length > 0){
//     alert(prenom.toLowerCase());
//     alert(prenom.toUpperCase());
//     alert(prenom[0].toUpperCase() + prenom.slice(1).toLowerCase());
//     alert(prenom[0].toLowerCase() + prenom.slice(1).toUpperCase());
// }else{
//     alert('T\'as rien rentré')
// }