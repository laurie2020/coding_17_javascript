// 1.
let myElements = document.querySelectorAll('div>h1, div>h2');
console.log(myElements);

// 2.
let objet = {
    nom: 'laurie',
    age: 20
}
objetProp = Object.keys(objet)
// 3.
for(let i in objet){
    console.log(i)
}
// 4.
for(let key in objet){
    console.log(objet[key])
}
// 5.

let i = 0;
for(let key in objet){
    myElements[i].innerHTML = objet[key];
    i++;
}
