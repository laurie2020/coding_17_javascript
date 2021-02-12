// Exo 1
// 1.
let francois = {
    panier: ['lait', 'tomate', 'poulet', 'fromage'],
    derober(){
        this.panier.push(sergio.panier.shift());
        this.panier.push(sergio.panier.shift());
    }
}
let sergio = {
    panier: ['steak', 'ail', 'haricots', 'oeufs']
}

console.log(francois.panier);
console.log(sergio.panier);
francois.derober();
console.log(francois.panier);
console.log(sergio.panier);