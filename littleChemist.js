/*
 * Mélangez des produits et découvrez ce qu'il se passe grâce au jeu du "petit chimiste" !
 * Attention ce jeu est interdit aux moins de 16 ans. Le père noël ne saurait être tenu pour responsable
 * de toute brûlure / explosion / maux de tête ou autres désagréments
 *
 * la fonction littleChemist reçoit en paramètre un objet avec des mixtures de 4 couleurs (rouge, jaune, bleu, verte)
 * - Après mélange, si la mixture reste de couleur primaire alors on retourne "Il ne se passe rien..."
 * - Après mélange, si la mixture est verte : "Hum, ça sent bon !"
 * - Après mélange, si la mixture est violette : "Waaa, la mixture devient solide !"
 * - Après mélange, si la mixture est orange : "Hahahahaha, mais pourquoi je rigole ! Hahahaha !"
 * - Dans les autres cas, "Tous aux abris, ça va exploser !"
 *
 * Exemple :
 *
 * let mixture = {
 *      yellowMixture: true,
 *      greenMixture: true,
 *      blueMixture: true,
 *      redMixture: false
 * };
 *
 * alors littleChemist(mixture) retournera : "Hum, ça sent bon !"
 *
 */

let mixture = {
   yellowMixture: true,
   greenMixture: true,
   blueMixture: true,
   redMixture: false
};
let primary = {
   yellowMixture: true,
   greenMixture: false,
   blueMixture: true,
   redMixture: true
}
let vert = {
   yellowMixture: true,
   greenMixture: false,
   blueMixture: true,
   redMixture: false
}
let violette = {
   yellowMixture: false,
   greenMixture: false,
   blueMixture: true,
   redMixture: true
}
let orange = {
   yellowMixture: true,
   greenMixture: false,
   blueMixture: false,
   redMixture: true
}

function littleChemist(mixture) {
   if (mixture === primary) {
      return "Il ne se passe rien...";
   } else if (mixture === vert) {
      return "Hum, ça sent bon !";
   } else if (mixture === violette) {
      return "Hum, ça sent bon !";
   } else if (mixture === orange) {
      return "Hahahahaha, mais pourquoi je rigole ! Hahahaha !";
   } else {
      return "Tous aux abris, ça va exploser !"
   };
   // CODE HERE !
}

export {
   littleChemist
};