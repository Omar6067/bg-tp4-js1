"use strict"; // Mode strict (slide 52)

// Données Students: tableau d'objets (slides 40-41)
const Students = [
    { id: 1000, nom: 'JOHN',   prenom: 'DOE',     note: 14, coef: 5 },
    { id: 2000, nom: 'BOB',    prenom: 'CARLTON', note: 7,  coef: 1 },
    { id: 3000, nom: 'RAYANE', prenom: 'SMITH',   note: 13, coef: 3 }
];

// Fonction B: un seul paramètre (float) et retourne un booléen (slide 46)
function B(note) {
    // Opérateur de comparaison >= (slide 42), le résultat est un boolean (slide 38)
    return note >= 10;
}

// Fonction A: parcourt les étudiants et appelle B (slide 46)
function A() {
    // Boucle for..of (slide 45)
    for (const student of Students) {
        // Appel de la fonction B avec retour (slide 46)
        const admis = B(student.note);

        // Notation ternaire (slide 43) + template string (slide 38)
        // Un console.log par étudiant (slide 34)
        console.log(`${student.id}: ${admis ? 'ADMIS' : 'AJOURNÉ'}`);
    }
}