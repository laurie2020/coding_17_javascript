// Exo 03
let body = document.querySelector('body');
let bouton1 = document.createElement('button');
// bouton1.innerText = "Rajouter un titre";
// body.appendChild(bouton1);

// bouton1.addEventListener('click', () => {
//     let h1 = document.createElement('h1');
//     h1.innerText = "Un titre";
//     body.appendChild(h1);
// })

// Exo 04
// bouton1.innerText = "Rajouter un bouton"
// body.appendChild(bouton1)
// bouton1.addEventListener('click', () => {
//     let bouton2 = document.createElement('button');
//     bouton2.innerText = "Exo 4";
//     body.appendChild(bouton2);
// })

// Exo 05
// let p = document.createElement('p');
// p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab earum deserunt dolore vitae officiis, optio excepturi culpa eum quasi placeat magnam dolores natus reprehenderit et aliquid mollitia fugit quae autem.";
// body.appendChild(p);
// bouton1.innerText = "Modifier la couleur du paragraphe";
// body.appendChild(bouton1);
// bouton1.addEventListener('click', () => {
//     p.style.color = "red";
// })

// Exo 6
// Etape 1 :
bouton1.innerText = "créer un h2";
body.appendChild(bouton1);

bouton1.addEventListener('click', () => {
    let h2 = document.createElement('h2');
    h2.innerText = "Je lance une fonction";
    body.appendChild(h2);
    let bouton = document.createElement('button');
    bouton.innerText = "Modifier le titre Exo 06";
    body.appendChild(bouton);
    bouton.addEventListener('click', () => {
        h2.style.color = 'red';
    })
})

// Etape 2 :
