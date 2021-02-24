// Exo 01 
let body = document.querySelector('body');
let bouton = document.createElement('button');
bouton.innerText = 'Je suis un bouton';
body.appendChild(bouton);

bouton.addEventListener('click', () => {
    bouton.innerText = "J'ai été cliqué";
});

// Exo 02
let bouton2 = document.createElement('button');
body.appendChild(bouton2);
bouton2.innerText = "Je suis un bouton";
let i = 0;
bouton2.addEventListener('click', () => {
    i++;
    bouton2.innerText = `J'ai été cliqué ${i} fois`;
})