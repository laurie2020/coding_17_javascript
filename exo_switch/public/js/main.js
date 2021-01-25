// 1. ToDo
// let jour = prompt("Quel jour sommes-nous ?")
// switch (jour) {
//     case 'lundi':
//         alert('Nous sommes lundi. Cours sur discord.')
//         break;
//     case 'mardi':
//         alert('Mardi, encore cours')
//         break;
//     case 'mercredi':
//         alert('On continue sur du Javascript ce mercredi')
//         break;
//     case 'jeudi':
//         alert('Pour jeudi, des exos des exos et des exos')
//         break;
//     case 'vendredi':
//         alert('Vendredi c\'est la fin de semaine, donc cours et pourquoi pas une serie')
//         break;
//     case 'samedi':
//         alert('Enfin samedi...dodo le matin et glandouille l\'aprem')
//         break;
//     case 'dimanche':
//         alert('Dodo toute la journée')
//         break;
//     default:
//         alert('t\'as pas rentré un jour de la semaine la')
//         break;
// }

// 2. Sortez couverts
// let meteo = prompt('Quel temps fait-il ?')
// switch (meteo) {
//     case 'pluie':
//         alert('Il pleut. J\'ai besoin d\'un parapluie')
//         break;
//     case 'neige':
//         alert('Il neige. Il me faut des gants et une echarpe')
//         break;
//     case 'soleil':
//         alert('Journée ensoleillée. Il ne faut pas que j\'oublie la crème solaire')
//         break;
//     default :
//     alert('Sinon bah habille toi en fonction des températures...')
//     break;
// }

// 3. Les 2 font la pair
// let nombre = parseInt(prompt('Entre un nombre'))
// let division = nombre % 2
// switch (isNaN(division) || division) {
//     case true :
//         alert('J\'ai dit un nombre');
//         break;
//     case 0 :
//         alert(`${nombre} est un nombre pair`);
//         break;
//     default :
//         alert(`${nombre} n'est pas un nombre pair`);
//         break;
    
// }

// 4. Maths "avancée"
let nombre1 = parseInt(prompt('Nombre 1'));
let operateur = prompt('Opérateur');
let nombre2 = parseInt(prompt('Nombre 2'));

switch (isNaN(nombre1+nombre2) || operateur) {
    case true:
        alert('Ya un problème la');
        break;
    case '+':
        alert(`${nombre1} + ${nombre2} = ${nombre1 + nombre2}`);
        break;
    case '-':
        alert(`${nombre1} - ${nombre2} = ${nombre1 - nombre2}`);
        break;
    case '/':
        alert(`${nombre1} / ${nombre2} = ${nombre1 / nombre2}`);
        break;
    case '*':
        alert(`${nombre1} * ${nombre2} = ${nombre1 * nombre2}`);
        break;
    default:
        alert('ton operation elle existe pas');
        break;    
}