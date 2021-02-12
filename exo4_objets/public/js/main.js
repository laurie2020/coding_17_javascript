// 1.
let vieille_dame = {
    age: 85,
    nom: {
        nom: "Diez",
        prenom: "Jaqueline"
    },
    moral: "mal",
    objet: "canne",
    parler(){
        if(this.moral == "mal"){
            console.log("Vous me dérangez ! (Elle le frappe avc sa canne)");
        }else if(this.moral == "bien"){
            console.log(`Bonjour, ${vieil_homme.nom}`);
        }
    }
}

let vieil_homme = {
    nom: "Marcel",
    adoucir(){
        vieille_dame.moral = "bien";
    }
}

vieille_dame.parler();
vieil_homme.adoucir();
vieille_dame.parler();
