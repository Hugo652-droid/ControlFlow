"use strict";

function getDayBoucle(day){
    let tab_Jour = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    /* Bien mais pour un affichage grafique
    for (let i = 1; i < 8; i++){
        if (i === day){
            return tab_Jour[day-1]
        }
    }*/

    for (let i = 0; i < tab_Jour.length; i++) {
        if (day === i + 1) {
            return tab_Jour[i];
        }
    }
    return "Le chiffre n'est pas valide";
}

console.log(getDayBoucle(1));