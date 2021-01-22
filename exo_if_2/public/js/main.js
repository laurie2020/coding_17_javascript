// 1. Les réponses booléenes (part 1)
// let x = prompt('Premier nombre');
// let y = prompt('Deuxième nombre');
// if(x==y){
//     alert(`Le nombre ${x} et le nombre ${y} sont-ils égaux ? : Oui`);
// }else{
//     alert(`Le nombre ${x} et le nombre ${y} sont-ils égaux ? : Non`);
// }

// 2. Les réponses booléennes (part 2)
// let x = prompt('Premier nombre');
// let y = prompt('Deuxième nombre');
// if(x<y){
//     alert(`Le nombre ${x} est-il plus petit que le nombre ${y} ? : Oui`)
// }else(
//     alert(`Le nombre ${x} est-il plus petit que le nombre ${y} ? : Non`)
// )

// 3. Les réponses booléenes (part 3)
// let x = prompt('Premier nombre');
// let y = prompt('Deuxième nombre');
// let z = prompt('Troisième nombre');
// if((parseInt(x)+parseInt(y)) > parseInt(z)){
//     alert(`La somme de ${x} + ${y} est-elle plus grande que le ${z} ? : Oui`)
// }else{
//     alert(`La somme de ${x} + ${y} est-elle plus grande que le ${z} ? : Non`)
// }

// 4. Strings et calculs
// let phrase = prompt('Entrez une phrase :');
// let length = parseInt(prompt('Combien de caractères y\'a-t-il dans cette phrase ?'));
// if(phrase.length==length){
//     alert('Bonne réponse !')
// }else{
//     alert(`Faux, vous êtes à ${Math.abs(phrase.length - length)} caractères de la bonne réponse.`)
// }

// 5. Des maths sans Maths
// let x = prompt('Premier nombre :');
// let y = prompt('Deuxième nombre :');
// if(parseInt(x)-parseInt(y) >= 0){
//     alert(`${x} - ${y} = ${parseInt(x) - parseInt(y)}`)
// }else{
//     alert(`${x} - ${y} = ${(parseInt(x) - parseInt(y)) * -1}`)
// }

// 6. Qui ~~a la plus grosse~~ est le plus grand ?
// let x = parseInt(prompt('Premier nombre :'));
// let y = parseInt(prompt('Deuxième nombre :'));
// let z = parseInt(prompt('Troisième nombre :'));

// if((x>y) && (x>z)){
//     alert(`Entre ${x}, ${y} et ${z}, ${x} est le plus grand.`);
// }else if((y>x) && (y>z)){
//     alert(`Entre ${x}, ${y} et ${z}, ${y} est le plus grand.`);
// }else if((z>x) && (z>y)){
//     alert(`Entre ${x}, ${y} et ${z}, ${z} est le plus grand.`);
// }else{
//     alert('Ils sont tous égaux !');
// }

// 5. Respect des consignes
// let prenom = prompt('Entrez votre prénom :')
// if(prenom == ''){
//     prompt('Veuillez vous assurer de bien remplir le champs ci-dessous. Quel est votre prénom ?')
// }else{
//     alert(`Bonjour ${prenom}`)
// }

// 6. Abonnez-vous
// let abon = confirm('Voulez-vous vous abonner ?');
// if(abon){
//     let choix = prompt('Souhaitez-vous l\'abonnement Luxe ou Normal')
//     if(choix == 'Luxe'){
//         alert('Félicitation pour votre abonnement à la formule Luxe !')
//     }else if(choix == 'Normal'){
//         alert('Merci pour votre abonnement')
//     }else{
//         alert('Dommage...')
//     }
// }else{
//     let retry = confirm('Etes vous sur de votre choix ?')
//     if(retry){
//         alert('Dommage, peut-être une autre fois...')
//     }else{
//         let choix = prompt('Souhaitez-vous l\'abonnement Luxe ou Normal')
//         if(choix == 'Luxe'){
//             alert('Félicitation pour votre abonnement à la formule Luxe !')
//         }else if(choix == 'Normal'){
//             alert('Merci pour votre abonnement')
//         }else{
//             alert('Dommage...')
//         }
//     }
// }


// 7. Questions pour un codeur
// let questionUn = prompt('Comment apelle-t-on une phrase ou un mot ?');
// let questionDeux = prompt('Comment appelle-t-on un numero');
// let reponseUn = 'string';
// let reponseDeux = 'number';
// if((questionUn != reponseUn) && (questionDeux != reponseDeux)){
//     alert('Tu as échoué');
// }else if((questionUn == reponseUn) && (questionDeux != reponseDeux)){
//     alert('T\'y es presque, tu t\'es trompé sur la deuxième question')
// }else if((questionUn != reponseUn) && (questionDeux == reponseDeux)){
//     alert('T\'y es presque, tu t\'es trompé sur la première question')
// }else{
//     alert('Félicitations !')
// }


// 8. C'est moi qui dit qui qui entre et qui qui entre pas
// let age = parseInt(prompt('Quel age avez-vous ?'));
// if(age > 18){
//     alert('vous êtes majeur, vous pouvez réserver.')
// }else if(age < 0){
//     alert('Revenez quand vous serez né !')
// }else if(age < 18){
//     alert('vous êtes mineur, revenez plus tard.')
// }else if(age == 18){
//     alert('Réservez mais attention, c\'est tout juste et ce film peut être choquant !');
// }else if(isNaN(age)){
//     alert('Vu que vous ne savez pas lire une instruction, je présume que vous n\'avez pas l\'âge.')
// }

// 9. Mais oui, c'est ~~clair~~ Logique (opérateus logiques)
let vacance = confirm("Voulez-vous partir en vacances ?");
let riche = confirm("Est-ce que vous êtes riche ?");
let chat = confirm("Est-ce que vous avez un chat ?");

if(!vacance){
    alert('Pas de problème, ne partez pas en vacances.')
}else if((!riche) || (chat)){
    alert('Même si vous le vouliez, vous ne pouriez pas partir...')
}else if((riche) && (!chat)){
    alert('Vous pourriez partir en vacance si vous le vouliez.')
}else if((riche) && (!chat) && (vacance)){
    alert('Vous pourriez partir en vacance si vous le vouliez.')
}