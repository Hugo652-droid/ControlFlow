"use strict";

function getDayIfElse(day) {
    /*if (day === 1) {
        return "Lundi";
    } else if (day === 2) {
        return "Mardi";
    } else if (day === 3) {
        return "Mercredi";
    } else if (day === 4) {
        return "Jeudi";
    } else if (day === 5) {
        return "Vendredi";
    } else if (day === 6) {
        return "Samedi";
    } else if (day === 7) {
        return "Dimanche";
    } else {
        return "Numéro de jour invalide";
    }*/

    let tab_Jour = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    if (day>0 && day<8){
        return tab_Jour[day-1];
    }
    else{
        return "Numéro de jour invalide";
    }
}

console.log(getDayIfElse(3));  // "Mercredi"