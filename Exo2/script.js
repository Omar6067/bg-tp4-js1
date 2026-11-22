"use strict"; // Mode strict (slide 52)

// Tableau de chaînes de caractères (slide 39)
function f1() {
    const etudiants = ['Etudiant1', 'Etudiant2', 'Etudiant3'];

    // Boucle for..of pour parcourir le tableau (slide 45)
    for (const etudiant of etudiants) {
        console.log(etudiant); // Affichage console (slide 34)
    }
}

// Objet avec des propriétés (slide 40)
function f2() {
    const etudiant = {
        nom: 'John',
        prenom: 'DOE',
        age: 30
    };
    console.log(etudiant); // Affiche l'objet (slide 40)
}

// Tableau d'objets (slide 41)
function f3() {
    const etudiants = [
        { nom: 'nom1', prenom: 'prenom1', age: 21 },
        { nom: 'nom2', prenom: 'prenom2', age: 22 },
        { nom: 'nom3', prenom: 'prenom3', age: 23 }
    ];

    // Boucle for..of (slide 45) + accès aux propriétés (slide 40)
    for (const e of etudiants) {
        // Template string (slide 38)
        console.log(`${e.nom}-${e.prenom}-${e.age}`);
    }
}