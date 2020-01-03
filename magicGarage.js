/*
 * Le jouet "garage magique" détecte le véhicule dans le garage et vous dit ce qu'il répare !
 *
 * si :
 * let vehicle = { type: "moto", color: "verte", prefix: "une" };
 *
 * alors le garage magic retournera :
 * Bravo, tu viens de réparer une moto verte !
 *
 */
let moto = {
    type: "moto",
    color: "verte",
    prefix: "une"
};

function magicGarage(vehicle) {
    if (moto === vehicle) {
        return 'Bravo, tu viens de réparer une moto verte !'
    }
    // Code here !
}

export {
    magicGarage
};