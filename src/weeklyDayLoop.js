function getDayBoucle(day){
    let tab_Jour = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    for (let i = 1; i < 8; i++){
        if (i === day){
            return tab_Jour[day-1]
        }
    }
    return "Le chiffre n'est pas valide"
}

console.log(getDayBoucle(4))