/* Ejercicio 1 */

const word = "esternocleidomastoideo";
const wordTransformed = word.charAt(0).toUpperCase() + word.slice(1);

console.log(wordTransformed);

/* Ejercicio 2 */
/* Parte 1 */

const snakePhrase = "esto_es_una_frase";

const solutionCamel = snakePhrase.replace(/([_][a-z])/g, g => g.toUpperCase().replace("_", ""));

console.log(solutionCamel);

/* Parte 2 */

let solutionSnake = solutionCamel.replace(/([A-Z])/g, g => "_" + g.toLowerCase());

/*
let solutionSnake = solutionCamel.replace(/([A-Z])/g, function (g) {
    return "_" + g.toLowerCase();
});
*/


console.log(solutionSnake);
