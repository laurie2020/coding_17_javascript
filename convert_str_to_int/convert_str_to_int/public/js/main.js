let age = prompt('Entrez votre age:');
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

let year = prompt('Entrez une année:');
alert(`En ${year} tu auras ${age + (parseInt(year) - 2020)} ans.`);
alert(`Tu es né en ${2020-age}`);