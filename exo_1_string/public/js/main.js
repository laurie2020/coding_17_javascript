let name = prompt('Comment tu t\'appelles ?');
alert(`Bonjour ${name}`);

let age = prompt('Quel age as-tu ?');
alert(`Tu a ${age} ans.`);

let prenom = prompt('Quel est ton prénom ?');
let nomDeFamille = prompt('Quel est ton nom de famille ?');
let fullName = `${prenom} ${nomDeFamille}`;
alert(fullName);

let prenom2 = prompt('Quel est ton prénom ?');
let nomDeFamille2 = prompt('Quel est ton nom de famille ?');
let fullName2 = `${nomDeFamille2.toUpperCase()} ${prenom}`;
alert(fullName2);
