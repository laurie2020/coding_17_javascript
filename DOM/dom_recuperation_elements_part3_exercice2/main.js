// Partie 1 Ajout de contenu
// 1.
let h1 = document.querySelector("h1");
h1.innerText = "Les attributs class et id";

// 2.
let premierH2 = document.querySelector('h2');
premierH2.innerText = 'Exercice 2 partie A';

// 3.
let deuxiemeH2 = document.querySelectorAll('h2')[1];
deuxiemeH2.innerText = 'Exercice 2 partie B';

// 4.
let premierP = document.querySelector('p');
premierP.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";

// 5.
let deuxiemeP = document.querySelectorAll('p')[1];
deuxiemeP.innerText = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";

// Partie 2.1 Ajout d'attribut et de leurs valeurs
// 6.
h1.id = "bigTitle";

// 7.
let div = document.querySelector('div');
div.setAttribute("class", "container")

// 8.
let allH2 = document.querySelectorAll('h2');
allH2.forEach(element => {
    element.setAttribute('class', "title")
})

// 9.
let allP = document.querySelectorAll('p');
allP.forEach(element => {
    element.setAttribute("class", "text")
})


// Partie 2.2 Ajout d'attribut et de leurs valeurs
// 10.
let section1 = document.querySelector('section');
section1.setAttribute("class", "margin-bottom border-black padding")

// 11.
let section2 = document.querySelectorAll('section')[1];
section2.setAttribute("class", "margin-top border-black padding");

// 12.
let sectionDiv = document.querySelector('section>div');
sectionDiv.setAttribute("style", "background-color: blue; border: red 2px solid; height: 20px; width: 20px;");
