// 1. foreach
// 1.
// let array = [1, "deux", false, ['salut'], "salut"];
// array.forEach(element => console.log(element));
// 2.
// let classe = ["Mohammed", "Yasmina", "Amine", "Salim", "Abdel", "Majda", "Bilal", "Laurie", "Yahya", "Mahad", "Nghia", "Saïd", "Camille", "Antoine", "Ayoub", "Yassin", "Cem", "Gauthier", "Redwane"];
// classe.forEach(element => console.log(`Bonjour ${element}`));

// 2. for
// 1.
// let array = [1, "deux", false, ['salut'], "salut"];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

// let classe = ["Mohammed", "Yasmina", "Amine", "Salim", "Abdel", "Majda", "Bilal", "Laurie", "Yahya", "Mahad", "Nghia", "Saïd", "Camille", "Antoine", "Ayoub", "Yassin", "Cem", "Gauthier", "Redwane"];

// for(let i = 0; i < classe.length; i++){
//     console.log(`Bonjour ${classe[i]}`);
// }

// 2.
// let grandsNombres = [];
// let petitsNombres = [];

// for(i = 0; i < 5; i++){
//     let nombre = parseInt(prompt('Entre un nombre :'));
//     if(nombre >= 12){
//         grandsNombres.push(nombre);
//     }else{
//         petitsNombres.push(nombre);
//     }
// }
// alert(`grands nombres: ${grandsNombres} petitsnombres: ${petitsNombres}`);

// 3. while
// let classe = [];
// let max = parseInt(prompt('Max de personnes dans la classe :'));

// while(classe.length < max){
//     classe.push(prompt('Nom de l eleve :'));
// }
// alert(classe);

// 4. do...while
// let classe = [];
// let max = parseInt(prompt('Max de personnes dans la classe'));

// do{
//     classe.push(prompt('Nom de la personne :'));
// }while(classe.length < max)
// alert(classe);